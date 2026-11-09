import Feed from '../../core/mixins/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import BrowseFeedActions from '../classes/BrowseFeedActions.js';
import Button from '../classes/Button.js';
import SearchBox from '../classes/SearchBox.js';

import Video from '../classes/Video.js';
import LockupView from '../classes/LockupView.js';
import MenuServiceItem from '../classes/menus/MenuServiceItem.js';
import ShowSheetCommand from '../classes/commands/ShowSheetCommand.js';
import SheetView from '../classes/SheetView.js';
import FeedbackEndpoint from '../classes/endpoints/FeedbackEndpoint.js';
import ListItemView from '../classes/ListItemView.js';
import ConfirmDialogEndpoint from '../classes/endpoints/ConfirmDialogEndpoint.js';
import ListView from '../classes/ListView.js';

import { InnertubeError } from '../../utils/Utils.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type { Actions, ApiResponse } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';
import type { ObservedArray } from '../helpers.js';

export default class History extends Feed<IBrowseResponse> {
  public sections: ObservedArray<ItemSection>;
  public feed_actions: BrowseFeedActions;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.sections = this.memo.getType(ItemSection);
    this.feed_actions = this.memo.getType(BrowseFeedActions)[0];
  }

  /**
   * Whether watch history is currently paused.
   */
  get is_watch_history_paused(): boolean {
    return this.#watchHistoryFeedbackEndpoint('resume') !== undefined;
  }

  /**
   * Pauses watch history, so that future videos are not recorded.
   * @returns `true` if YouTube processed the request.
   */
  async pauseWatchHistory(): Promise<boolean> {
    if (!this.actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    return await this.#submitFeedback(this.#watchHistoryFeedbackEndpoint('pause'));
  }

  /**
   * Resumes watch history.
   * @returns `true` if YouTube processed the request.
   */
  async resumeWatchHistory(): Promise<boolean> {
    if (!this.actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    return await this.#submitFeedback(this.#watchHistoryFeedbackEndpoint('resume'));
  }

  /**
   * Clears the entire watch history.
   * @returns `true` if YouTube processed the request.
   */
  async clearWatchHistory(): Promise<boolean> {
    if (!this.actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    return await this.#submitFeedback(this.#watchHistoryFeedbackEndpoint('clear'));
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
   * @returns `true` if YouTube processed the request.
   */
  async removeVideo(video_id: string, pages_to_load: number = 1): Promise<boolean> {
    if (!this.actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    let self: History = this;

    for (let remaining = pages_to_load; remaining > 0; remaining--) {
      const feedbackEndpoint = this.#findRemoveFeedbackEndpoint(self.sections, video_id);

      if (feedbackEndpoint) {
        return self.#submitFeedback(feedbackEndpoint);
      }

      if (remaining === 1)
        break;

      try {
        self = await self.getContinuation();
      } catch { /** no-op */ }
    }

    throw new Error(`Video not found in watch history (ID: ${video_id})`);
  }

  #findRemoveFeedbackEndpoint(
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

  #watchHistoryFeedbackEndpoint(action: 'clear' | 'pause' | 'resume'): NavigationEndpoint | undefined {
    const icons = {
      clear: 'DELETE',
      pause: 'PAUSE_OUTLINED',
      resume: 'PLAY_OUTLINED'
    };

    for (const content of this.feed_actions?.contents ?? []) {
      if (!content.is(Button) || content.icon_type !== icons[action])
        continue;

      const confirm_dialog_endpoint = content.endpoint.command;

      if (confirm_dialog_endpoint?.is(ConfirmDialogEndpoint) && confirm_dialog_endpoint.content?.confirm_endpoint)
        return confirm_dialog_endpoint.content.confirm_endpoint;
    }

    return undefined;
  }

  async #submitFeedback(endpoint?: NavigationEndpoint): Promise<boolean> {
    if (!endpoint)
      throw new InnertubeError('Watch history controls were not found in the feed actions');

    const response = await endpoint.call(this.actions, { parse: false });

    return Boolean(response.data.feedbackResponses?.[0]?.isProcessed);
  }
}