import Feed from '../../core/mixins/Feed.ts';
import ItemSection from '../classes/ItemSection.ts';
import BrowseFeedActions from '../classes/BrowseFeedActions.ts';
import Button from '../classes/Button.ts';

import type { Actions, ApiResponse } from '../../core/index.ts';
import type { IBrowseResponse } from '../types/index.ts';
import type Video from '../classes/Video.ts';

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
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let currentHistory: History = this;

    while (pagesToLoad > 0) {
      let feedbackToken;

      for (const section of currentHistory.sections) {
        for (const content of section.contents) {
          const video = content as Video;
          if (video.video_id === video_id && video.menu) {
            feedbackToken = video.menu.top_level_buttons[0].as(Button).endpoint.payload.feedbackToken;
            break;
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
          currentHistory = await currentHistory.getContinuation();
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
