import EventEmitter from '../../utils/EventEmitterLike';
import Parser, { LiveChatContinuation, ParsedResponse } from '../index';
import VideoInfo from './VideoInfo';

import AddChatItemAction from '../classes/livechat/AddChatItemAction';
import AddLiveChatTickerItemAction from '../classes/livechat/AddLiveChatTickerItemAction';
import MarkChatItemAsDeletedAction from '../classes/livechat/MarkChatItemAsDeletedAction';
import MarkChatItemsByAuthorAsDeletedAction from '../classes/livechat/MarkChatItemsByAuthorAsDeletedAction';
import ReplaceChatItemAction from '../classes/livechat/ReplaceChatItemAction';
import ReplayChatItemAction from '../classes/livechat/ReplayChatItemAction';
import ShowLiveChatActionPanelAction from '../classes/livechat/ShowLiveChatActionPanelAction';

import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction';
import UpdateTitleAction from '../classes/livechat/UpdateTitleAction';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction';

import AddBannerToLiveChatCommand from '../classes/livechat/AddBannerToLiveChatCommand';
import RemoveBannerForLiveChatCommand from '../classes/livechat/RemoveBannerForLiveChatCommand';
import ShowLiveChatTooltipCommand from '../classes/livechat/ShowLiveChatTooltipCommand';

import Proto from '../../proto/index';
import { InnertubeError, uuidv4 } from '../../utils/Utils';
import type { ObservedArray, YTNode } from '../helpers';

import Button from '../classes/Button';
import LiveChatAutoModMessage from '../classes/livechat/items/LiveChatAutoModMessage';
import LiveChatMembershipItem from '../classes/livechat/items/LiveChatMembershipItem';
import LiveChatPaidMessage from '../classes/livechat/items/LiveChatPaidMessage';
import LiveChatPaidSticker from '../classes/livechat/items/LiveChatPaidSticker';
import LiveChatTextMessage from '../classes/livechat/items/LiveChatTextMessage';
import LiveChatViewerEngagementMessage from '../classes/livechat/items/LiveChatViewerEngagementMessage';
import ItemMenu from './ItemMenu';

import type Actions from '../../core/Actions';

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
  #actions: Actions;
  #video_id: string;
  #channel_id: string;
  #continuation?: string;
  #mcontinuation?: string;

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
  }

  on(type: 'start', listener: (initial_data: LiveChatContinuation) => void): void;
  on(type: 'chat-update', listener: (action: ChatAction) => void): void;
  on(type: 'metadata-update', listener: (metadata: LiveMetadata) => void): void;
  on(type: 'error', listener: (err: Error) => void): void;
  on(type: 'end', listener: () => void): void;
  on(type: string, listener: (...args: any[]) => void): void {
    super.on(type, listener);
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.#pollLivechat();
      this.#pollMetadata();
    }
  }

  stop() {
    this.running = false;
  }

  #pollLivechat() {
    (async () => {
      try {
        const endpoint = this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat';
        const response = await this.#actions.execute(endpoint, { continuation: this.#continuation });

        const data = Parser.parseResponse(response.data);
        const contents = data.continuation_contents;

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
        } else {
          await this.#emitSmoothedActions(contents.actions);
        }

        /**
         * If there are no actions then we wait 1000 milliseconds, otherwise
         * the amount of items on the action queue will determine the polling interval.
         */
        if (!contents.actions.length && !contents.header)
          await this.#wait(1000);

        if (this.running)
          this.#pollLivechat();
      } catch (err) {
        this.emit('error', new InnertubeError('Failed to poll livechat, retrying...', err));
        await this.#wait(2000);
        if (this.running)
          this.#pollLivechat();
      }
    })();
  }

  /**
   * Ensures actions are emitted at the right speed.
   * This was adapted from YouTube's compiled code (Android & Web).
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
        const data = Parser.parseResponse(response.data);

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
        this.emit('error', new InnertubeError('Failed to poll live metadata, retrying...', err));
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
      clientMessageId: uuidv4(),
      parse: true
    });

    if (!response.actions)
      throw new InnertubeError('Response did not have an "actions" property. The call may have failed.');

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
    if (!item.menu_endpoint)
      throw new InnertubeError('This item does not have a menu.', item);

    const response = await item.menu_endpoint.call(this.#actions, { parse: true });

    if (!response)
      throw new InnertubeError('Could not retrieve item menu.', item);

    return new ItemMenu(response, this.#actions);
  }

  /**
   * Equivalent to "clicking" a button.
   */
  async selectButton(button: Button): Promise<ParsedResponse> {
    const response = await button.endpoint.call(this.#actions, { parse: true });
    return response;
  }

  async #wait(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
  }
}

export default LiveChat;