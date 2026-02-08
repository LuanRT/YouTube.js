import Feed from '../../core/mixins/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import BrowseFeedActions from '../classes/BrowseFeedActions.js';
import Button from '../classes/Button.js';

import type { Actions, ApiResponse } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';
import Video from '../classes/Video.js';
import LockupView from '../classes/LockupView.js';

// TODO: make feed actions usable
export default class History extends Feed<IBrowseResponse> {
  public sections: ItemSection[];
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
   * Removes a video from watch history.
   */
  async removeVideo(video_id: string, pages_to_load: number = 1): Promise<boolean> {
    let pagesToLoad = pages_to_load;

    while (pagesToLoad > 0) {
      let feedbackToken;

      for (const section of this.sections) {
        for (const content of section.contents) {
          if (content.is(Video)) {
            if (content.video_id === video_id && content.menu) {
              feedbackToken = content.menu.top_level_buttons[0].as(Button).endpoint.payload.feedbackToken;
              break;
            }
          } else if (content.is(LockupView)) {
            if (content.content_id === video_id) {
              const listItems = content.metadata?.menu_button?.on_tap?.payload.panelLoadingStrategy.inlineContent.sheetViewModel.content.listViewModel.listItems;
              const listItem = listItems.find((video: { listItemViewModel: { title: { content: string; }; }; }) => video.listItemViewModel?.title.content === 'Remove from watch history');
              feedbackToken = listItem.listItemViewModel.rendererContext.commandContext.onTap.innertubeCommand.feedbackEndpoint.feedbackToken;
              break;
            }
          }
        }

        if (feedbackToken) {
          break;
        }
      }

      if (feedbackToken) {
        const body = { feedbackTokens: [ feedbackToken ] };
        const response = await this.actions.execute('/feedback', body);
        const data = response.data;

        if (!data.feedbackResponses[0].isProcessed) {
          throw new Error('Failed to remove video from watch history');
        }

        return true;
      }

      if (--pagesToLoad > 0) {
        try {
          Object.assign(this, await this.getContinuation());
        } catch {
          throw new Error('Unable to find video in watch history');
        }
      } else {
        throw new Error('Unable to find video in watch history');
      }
    }

    return false;
  }
}
