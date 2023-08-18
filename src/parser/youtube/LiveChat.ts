import EventEmitter from '../../utils/EventEmitterLike.js';
import Parser, { LiveChatContinuation } from '../index.js';
import type VideoInfo from './VideoInfo.js';
import SmoothedQueue from './SmoothedQueue.js';

import AddChatItemAction from '../classes/livechat/AddChatItemAction.js';
import type AddLiveChatTickerItemAction from '../classes/livechat/AddLiveChatTickerItemAction.js';
import type MarkChatItemAsDeletedAction from '../classes/livechat/MarkChatItemAsDeletedAction.js';
import type MarkChatItemsByAuthorAsDeletedAction from '../classes/livechat/MarkChatItemsByAuthorAsDeletedAction.js';
import type ReplaceChatItemAction from '../classes/livechat/ReplaceChatItemAction.js';
import type ReplayChatItemAction from '../classes/livechat/ReplayChatItemAction.js';
import type ShowLiveChatActionPanelAction from '../classes/livechat/ShowLiveChatActionPanelAction.js';

import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction.js';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction.js';
import UpdateTitleAction from '../classes/livechat/UpdateTitleAction.js';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction.js';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction.js';

import type AddBannerToLiveChatCommand from '../classes/livechat/AddBannerToLiveChatCommand.js';
import type RemoveBannerForLiveChatCommand from '../classes/livechat/RemoveBannerForLiveChatCommand.js';
import type ShowLiveChatTooltipCommand from '../classes/livechat/ShowLiveChatTooltipCommand.js';

import * as Proto from '../../proto/index.js';
import { InnertubeError, Platform } from '../../utils/Utils.js';
import type { ObservedArray, YTNode } from '../helpers.js';

import type Button from '../classes/Button.js';
import type LiveChatAutoModMessage from '../classes/livechat/items/LiveChatAutoModMessage.js';
import type LiveChatMembershipItem from '../classes/livechat/items/LiveChatMembershipItem.js';
import type LiveChatPaidMessage from '../classes/livechat/items/LiveChatPaidMessage.js';
import type LiveChatPaidSticker from '../classes/livechat/items/LiveChatPaidSticker.js';
import type LiveChatTextMessage from '../classes/livechat/items/LiveChatTextMessage.js';
import type LiveChatViewerEngagementMessage from '../classes/livechat/items/LiveChatViewerEngagementMessage.js';
import ItemMenu from './ItemMenu.js';

import type Actions from '../../core/Actions.js';
import type { IParsedResponse, IUpdatedMetadataResponse } from '../types/ParsedResponse.js';
import { NavigationEndpoint } from '../nodes.js';

export type ChatAction =
  AddChatItemAction | AddBannerToLiveChatCommand | AddLiveChatTickerItemAction |
  MarkChatItemAsDeletedAction | MarkChatItemsByAuthorAsDeletedAction | RemoveBannerForLiveChatCommand |
  ReplaceChatItemAction | ReplayChatItemAction | ShowLiveChatActionPanelAction | ShowLiveChatTooltipCommand;

export type ChatItemWithMenu = LiveChatAutoModMessage | LiveChatMembershipItem | LiveChatPaidMessage | LiveChatPaidSticker | LiveChatTextMessage | LiveChatViewerEngagementMessage;

export interface LiveMetadata {
  title?: UpdateTitleAction;
  description?: UpdateDescriptionAction;
  views?: UpdateViewershipAction;
  likes?: UpdateToggleButtonTextAction;
  date?: UpdateDateTextAction;
}

class LiveChat extends EventEmitter {
  smoothed_queue: SmoothedQueue;

  #actions: Actions;
  #video_id: string;
  #channel_id: string;
  #continuation?: string;
  #mcontinuation?: string;
  #retry_count = 0;

  initial_info?: LiveChatContinuation;
  metadata?: LiveMetadata;

  running = false;
  is_replay = false;

  constructor(video_info: VideoInfo) {
    super();

    this.#video_id = video_info.basic_info.id as string;
    this.#channel_id = video_info.basic_info.channel_id as string;
    this.#actions = video_info.actions;
    this.#continuation = video_info.livechat?.continuation;
    this.is_replay = video_info.livechat?.is_replay || false;
    this.smoothed_queue = new SmoothedQueue();

    this.smoothed_queue.callback = async (actions: YTNode[]) => {
      if (!actions.length) {
        // Wait 2 seconds before requesting an incremental continuation if the action group is empty.
        await this.#wait(2000);
      } else if (actions.length < 10) {
        // If there are less than 10 actions, wait until all of them are emitted.
        await this.#emitSmoothedActions(actions);
      } else if (this.is_replay) {
        /**
         * NOTE: Live chat replays require data from the video player for actions to be emitted timely
         * and as we don't have that, this ends up being quite innacurate.
         */
        this.#emitSmoothedActions(actions);
        await this.#wait(2000);
      } else {
        // There are more than 10 actions, emit them asynchonously so we can request the next incremental continuation.
        this.#emitSmoothedActions(actions);
      }

      if (this.running) {
        this.#pollLivechat();
      }
    };
  }

  on(type: 'start', listener: (initial_data: LiveChatContinuation) => void): void;
  on(type: 'chat-update', listener: (action: ChatAction) => void): void;
  on(type: 'metadata-update', listener: (metadata: LiveMetadata) => void): void;
  on(type: 'error', listener: (err: Error) => void): void;
  on(type: 'end', listener: () => void): void;
  on(type: string, listener: (...args: any[]) => void): void {
    super.on(type, listener);
  }

  once(type: 'start', listener: (initial_data: LiveChatContinuation) => void): void;
  once(type: 'chat-update', listener: (action: ChatAction) => void): void;
  once(type: 'metadata-update', listener: (metadata: LiveMetadata) => void): void;
  once(type: 'error', listener: (err: Error) => void): void;
  once(type: 'end', listener: () => void): void;
  once(type: string, listener: (...args: any[]) => void): void {
    super.once(type, listener);
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.#pollLivechat();
      this.#pollMetadata();
    }
  }

  stop() {
    this.smoothed_queue.clear();
    this.running = false;
  }

  #pollLivechat() {
    (async () => {
      try {
        const response = await this.#actions.execute(
          this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat',
          { continuation: this.#continuation, parse: true }
        );

        const contents = response.continuation_contents;

        if (!contents) {
          this.emit('error', new InnertubeError('Unexpected live chat incremental continuation response', response));
          this.emit('end');
          this.stop();
        }

        if (!(contents instanceof LiveChatContinuation)) {
          this.stop();
          this.emit('end');
          return;
        }

        this.#continuation = contents.continuation.token;

        // Header only exists in the first request
        if (contents.header) {
          this.initial_info = contents;
          this.emit('start', contents);
          if (this.running)
            this.#pollLivechat();
        } else {
          this.smoothed_queue.enqueueActionGroup(contents.actions);
        }

        this.#retry_count = 0;
      } catch (err) {
        this.emit('error', err);

        if (this.#retry_count++ < 10) {
          await this.#wait(2000);
          this.#pollLivechat();
        } else {
          this.emit('error', new InnertubeError('Reached retry limit for incremental continuation requests', err));
          this.emit('end');
          this.stop();
        }
      }
    })();
  }

  /**
   * Ensures actions are emitted at the right speed.
   * This and {@link SmoothedQueue} were based off of YouTube's own implementation.
   */
  async #emitSmoothedActions(action_queue: YTNode[]) {
    const base = 1E4;

    let delay = action_queue.length < base / 80 ? 1 : Math.ceil(action_queue.length / (base / 80));

    const emit_delay_ms =
      delay == 1 ? (
        delay = base / action_queue.length,
        delay *= Math.random() + 0.5,
        delay = Math.min(1E3, delay),
        delay = Math.max(80, delay)
      ) : delay = 80;

    for (const action of action_queue) {
      await this.#wait(emit_delay_ms);
      this.emit('chat-update', action);
    }
  }

  #pollMetadata() {
    (async () => {
      try {
        const payload: {
          videoId?: string;
          continuation?: string;
        } = { videoId: this.#video_id };

        if (this.#mcontinuation) {
          payload.continuation = this.#mcontinuation;
        }

        const response = await this.#actions.execute('/updated_metadata', payload);
        const data = Parser.parseResponse<IUpdatedMetadataResponse>(response.data);

        this.#mcontinuation = data.continuation?.token;

        this.metadata = {
          title: data.actions?.array().firstOfType(UpdateTitleAction) || this.metadata?.title,
          description: data.actions?.array().firstOfType(UpdateDescriptionAction) || this.metadata?.description,
          views: data.actions?.array().firstOfType(UpdateViewershipAction) || this.metadata?.views,
          likes: data.actions?.array().firstOfType(UpdateToggleButtonTextAction) || this.metadata?.likes,
          date: data.actions?.array().firstOfType(UpdateDateTextAction) || this.metadata?.date
        };

        this.emit('metadata-update', this.metadata);

        await this.#wait(5000);

        if (this.running)
          this.#pollMetadata();
      } catch (err) {
        await this.#wait(2000);
        if (this.running)
          this.#pollMetadata();
      }
    })();
  }

  /**
   * Sends a message.
   * @param text - Text to send.
   */
  async sendMessage(text: string): Promise<ObservedArray<AddChatItemAction>> {
    const response = await this.#actions.execute('/live_chat/send_message', {
      params: Proto.encodeMessageParams(this.#channel_id, this.#video_id),
      richMessage: { textSegments: [ { text } ] },
      clientMessageId: Platform.shim.uuidv4(),
      client: 'ANDROID',
      parse: true
    });

    if (!response.actions)
      throw new InnertubeError('Unexpected response from send_message', response);

    return response.actions.array().as(AddChatItemAction);
  }

  /**
   * Applies given filter to the live chat.
   * @param filter - Filter to apply.
   */
  applyFilter(filter: 'TOP_CHAT' | 'LIVE_CHAT'): void {
    if (!this.initial_info)
      throw new InnertubeError('Cannot apply filter before initial info is retrieved.');

    const menu_items = this.initial_info?.header?.view_selector?.sub_menu_items;

    if (filter === 'TOP_CHAT') {
      if (menu_items?.at(0)?.selected) return;
      this.#continuation = menu_items?.at(0)?.continuation;
    } else {
      if (menu_items?.at(1)?.selected) return;
      this.#continuation = menu_items?.at(1)?.continuation;
    }
  }

  /**
   * Retrieves given chat item's menu.
   */
  async getItemMenu(item: ChatItemWithMenu): Promise<ItemMenu> {
    if (!item.hasKey('menu_endpoint') || !item.key('menu_endpoint').isInstanceof(NavigationEndpoint))
      throw new InnertubeError('This item does not have a menu.', item);

    const response = await item.key('menu_endpoint').instanceof(NavigationEndpoint).call(this.#actions, { parse: true });

    if (!response)
      throw new InnertubeError('Could not retrieve item menu.', item);

    return new ItemMenu(response, this.#actions);
  }

  /**
   * Equivalent to "clicking" a button.
   */
  async selectButton(button: Button): Promise<IParsedResponse> {
    const response = await button.endpoint.call(this.#actions, { parse: true });
    return response;
  }

  async #wait(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
  }
}

export default LiveChat;