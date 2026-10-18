import Feed from '../../core/mixins/Feed.ts';
import ItemSection from '../classes/ItemSection.ts';
import BrowseFeedActions from '../classes/BrowseFeedActions.ts';
import SearchBox from '../classes/SearchBox.ts';

import Video from '../classes/Video.ts';
import LockupView from '../classes/LockupView.ts';
import MenuServiceItem from '../classes/menus/MenuServiceItem.ts';
import ShowSheetCommand from '../classes/commands/ShowSheetCommand.ts';
import SheetView from '../classes/SheetView.ts';
import FeedbackEndpoint from '../classes/endpoints/FeedbackEndpoint.ts';
import ListItemView from '../classes/ListItemView.ts';
import ConfirmDialogEndpoint from '../classes/endpoints/ConfirmDialogEndpoint.ts';
import ListView from '../classes/ListView.ts';

import { InnertubeError } from '../../utils/Utils.ts';
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';
import type { Actions, ApiResponse } from '../../core/index.ts';
import type { IBrowseResponse } from '../types/index.ts';
import type { ObservedArray } from '../helpers.ts';

// TODO: make feed actions usable
export default class History extends Feed<IBrowseResponse> {
  public sections: ObservedArray<ItemSection>;
  public feed_actions: BrowseFeedActions;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.sections = this.memo.getType(ItemSection);
    this.feed_actions = this.memo.getType(BrowseFeedActions)[0];
  }

  /**
   * Retrieves next batch of contents.
   */
  async getContinuation(): Promise<History> {
    const response = await this.getContinuationData();
    if (!response)
      throw new Error('No continuation data found');
    return new History(this.actions, response, true);
  }

  /**
   * Searches the watch history feed using the feed actions search box.
   * @param query - The search query.
   */
  async search(query: string): Promise<History> {
    if (!this.actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const search_box = this.feed_actions?.contents.firstOfType(SearchBox);

    if (!search_box)
      throw new InnertubeError('Search box not found in watch history feed actions');

    const response = await search_box.endpoint.call(this.actions, { query });

    return new History(this.actions, response);
  }

  /**
   * Removes a video from watch history.
   */
  async removeVideo(video_id: string, pages_to_load: number = 1): Promise<ApiResponse | undefined> {
    if (!this.actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    let self: History = this;

    for (let remaining = pages_to_load; remaining > 0; remaining--) {
      const feedbackEndpoint = findRemoveEndpoint(self.sections, video_id);

      if (feedbackEndpoint) {
        return feedbackEndpoint.call(this.actions, { parse: false });
      }

      if (remaining === 1)
        break;

      try {
        self = await self.getContinuation();
      } catch { /** no-op */ }
    }

    throw new Error(`Video not found in watch history (ID: ${video_id})`);
  }
}

function findRemoveEndpoint(
  sections: ObservedArray<ItemSection>,
  video_id: string
): NavigationEndpoint | undefined {
  for (const section of sections) {
    for (const content of section.contents) {
      if (content.is(Video) && content.video_id === video_id && content.menu) {
        const removeButton = content.menu.items.find(
          (item) => item.is(MenuServiceItem) && item.icon_type === 'DELETE'
        )?.as(MenuServiceItem);

        const endpoint = removeButton?.endpoint;

        if (endpoint)
          return endpoint;

      } else if (content.is(LockupView) && content.content_id === video_id) {
        const openMenuCommand = content.metadata?.menu_button?.on_tap?.command;

        if (
          openMenuCommand?.is(ShowSheetCommand) &&
          openMenuCommand.inline_content?.is(SheetView) &&
          openMenuCommand.inline_content.content?.is(ListView)
        ) {
          const removeButton = openMenuCommand.inline_content.content.items.find(
            (item) =>
              item.is(ListItemView) &&
              item.leading_image[0].client_resource?.image_name === 'DELETE'
          )?.as(ListItemView);

          const endpoint = removeButton?.renderer_context?.command_context?.on_tap;

          if (endpoint?.command?.is(FeedbackEndpoint))
            return endpoint;

          if (
            endpoint?.command?.is(ConfirmDialogEndpoint) &&
            endpoint.command.content?.confirm_endpoint?.is(FeedbackEndpoint)
          )
            return endpoint.command.content.confirm_endpoint;
        }
      }
    }
  }

  return undefined;
}