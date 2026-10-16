import Feed from '../../core/mixins/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import BrowseFeedActions from '../classes/BrowseFeedActions.js';
import Button from '../classes/Button.js';
import SearchBox from '../classes/SearchBox.js';
import { InnertubeError } from '../../utils/Utils.js';

import type { Actions, ApiResponse } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';
import type { ObservedArray } from '../helpers.js';
import Video from '../classes/Video.js';
import LockupView from '../classes/LockupView.js';

/**
 * Finds a feedback token within an endpoint payload. The token is exposed directly on some layouts
 * (`feedbackEndpoint`), but nested under a confirm dialog on others
 * (`confirmDialogEndpoint.confirmDialogRenderer.confirmEndpoint.feedbackEndpoint`).
 */
function findFeedbackToken(node: unknown, depth = 0): string | undefined {
  if (!node || typeof node !== 'object' || depth > 10)
    return undefined;

  if ('feedbackToken' in node && typeof node.feedbackToken === 'string')
    return node.feedbackToken;

  for (const value of Object.values(node)) {
    const token = findFeedbackToken(value, depth + 1);
    if (token)
      return token;
  }

  return undefined;
}

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
    return this.#watchHistoryFeedbackToken('resume') !== undefined;
  }

  /**
   * Pauses watch history, so that future videos are not recorded.
   * @returns `true` if YouTube processed the request.
   */
  async pauseWatchHistory(): Promise<boolean> {
    return await this.#submitFeedback(this.#watchHistoryFeedbackToken('pause'));
  }

  /**
   * Resumes watch history.
   * @returns `true` if YouTube processed the request.
   */
  async resumeWatchHistory(): Promise<boolean> {
    return await this.#submitFeedback(this.#watchHistoryFeedbackToken('resume'));
  }

  /**
   * Clears the entire watch history.
   * @returns `true` if YouTube processed the request.
   */
  async clearWatchHistory(): Promise<boolean> {
    return await this.#submitFeedback(this.#watchHistoryFeedbackToken('clear'));
  }

  #watchHistoryFeedbackToken(action: 'clear' | 'pause' | 'resume'): string | undefined {
    const patterns = {
      clear: /clear( all)? watch history/i,
      pause: /(pause|turn off).*watch history/i,
      resume: /(resume|turn on).*watch history/i
    };

    for (const button of this.memo.getType(Button)) {
      const labels = [ button.text, button.label, button.tooltip ];
      if (!labels.some((label) => typeof label === 'string' && patterns[action].test(label)))
        continue;

      const token = findFeedbackToken(button.endpoint.payload);
      if (token)
        return token;
    }

    return undefined;
  }

  async #submitFeedback(feedback_token?: string): Promise<boolean> {
    if (!feedback_token)
      throw new InnertubeError('No watch history feedback token was found on the page');

    const response = await this.actions.execute('/feedback', { feedbackTokens: [ feedback_token ] });

    return Boolean(response.data.feedbackResponses?.[0]?.isProcessed);
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
    const search_box = this.feed_actions?.contents.firstOfType(SearchBox);

    if (!search_box)
      throw new InnertubeError('Search box not found in watch history feed actions');

    const response = await search_box.endpoint.call(this.actions, { query });

    return new History(this.actions, response);
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
