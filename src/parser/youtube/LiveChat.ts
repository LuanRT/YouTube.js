import Parser, { LiveChatContinuation, ParsedResponse } from '../index';
import EventEmitter from '../../utils/EventEmitterLike';
import VideoInfo from './VideoInfo';

import AddChatItemAction from '../classes/livechat/AddChatItemAction';
import AddLiveChatTickerItemAction from '../classes/livechat/AddLiveChatTickerItemAction';
import MarkChatItemAsDeletedAction from '../classes/livechat/MarkChatItemAsDeletedAction';
import MarkChatItemsByAuthorAsDeletedAction from '../classes/livechat/MarkChatItemsByAuthorAsDeletedAction';
import ReplaceChatItemAction from '../classes/livechat/ReplaceChatItemAction';
import ReplayChatItemAction from '../classes/livechat/ReplayChatItemAction';
import ShowLiveChatActionPanelAction from '../classes/livechat/ShowLiveChatActionPanelAction';

import UpdateTitleAction from '../classes/livechat/UpdateTitleAction';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction';
import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction';

import AddBannerToLiveChatCommand from '../classes/livechat/AddBannerToLiveChatCommand';
import RemoveBannerForLiveChatCommand from '../classes/livechat/RemoveBannerForLiveChatCommand';
import ShowLiveChatTooltipCommand from '../classes/livechat/ShowLiveChatTooltipCommand';

import { InnertubeError } from '../../utils/Utils';
import { ObservedArray, YTNode } from '../helpers';
import LiveChatTextMessage from '../classes/livechat/items/LiveChatTextMessage';
import LiveChatPaidMessage from '../classes/livechat/items/LiveChatPaidMessage';
import LiveChatPaidSticker from '../classes/livechat/items/LiveChatPaidSticker';
import LiveChatAutoModMessage from '../classes/livechat/items/LiveChatAutoModMessage';
import LiveChatMembershipItem from '../classes/livechat/items/LiveChatMembershipItem';
import LiveChatViewerEngagementMessage from '../classes/livechat/items/LiveChatViewerEngagementMessage';
import ItemMenu from './ItemMenu';
import Button from '../classes/Button';

export type ChatAction =
  AddChatItemAction | AddBannerToLiveChatCommand | AddLiveChatTickerItemAction |
  MarkChatItemAsDeletedAction | MarkChatItemsByAuthorAsDeletedAction | RemoveBannerForLiveChatCommand |
  ReplaceChatItemAction | ReplayChatItemAction | ShowLiveChatActionPanelAction | ShowLiveChatTooltipCommand;

export type ChatItemHasMenuEndpoint = LiveChatAutoModMessage | LiveChatMembershipItem | LiveChatPaidMessage | LiveChatPaidSticker | LiveChatTextMessage | LiveChatViewerEngagementMessage;

export interface LiveMetadata {
  title: UpdateTitleAction | undefined;
  description: UpdateDescriptionAction | undefined;
  views: UpdateViewershipAction | undefined;
  likes: UpdateToggleButtonTextAction | undefined;
  date: UpdateDateTextAction | undefined;
}

class LiveChat extends EventEmitter {
  #actions;
  #video_info;
  #continuation;
  #mcontinuation?: string;

  #lc_polling_interval_ms = 1000;
  #md_polling_interval_ms = 5000;

  initial_info?: LiveChatContinuation;
  metadata?: LiveMetadata;

  running = false;
  is_replay = false;

  constructor(video_info: VideoInfo) {
    super();

    this.#video_info = video_info;
    this.#actions = video_info.actions;
    this.#continuation = video_info.livechat?.continuation || undefined;
    this.is_replay = video_info.livechat?.is_replay || false;
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
    const lc_poller = setTimeout(() => {
      (async () => {
        const endpoint = this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat';
        const response = await this.#actions.livechat(endpoint, { ctoken: this.#continuation });

        const data = Parser.parseResponse(response.data);
        const contents = data.continuation_contents;

        if (!(contents instanceof LiveChatContinuation))
          throw new InnertubeError('Continuation is not a LiveChatContinuation');

        this.#continuation = contents.continuation.token;
        this.#lc_polling_interval_ms = contents.continuation.timeout_ms;

        // Header only exists in the first request
        if (contents.header) {
          this.initial_info = contents;
          this.emit('start', contents);
        } else {
          await this.#emitSmoothedActions(contents.actions);
        }

        clearTimeout(lc_poller);

        this.running && this.#pollLivechat();
      })().catch((err) => Promise.reject(err));
    }, this.#lc_polling_interval_ms);
  }

  /**
   * Ensures actions are emitted at the right speed.
   * This was adapted from YouTube's compiled code (Android).
   */
  async #emitSmoothedActions(actions: ObservedArray<YTNode>) {
    const base = 1E4;

    let delay = actions.length < base / 80 ? 1 : 0;

    const emit_delay_ms =
      delay == 1 ? (
        delay = base / actions.length,
        delay *= Math.random() + 0.5,
        delay = Math.min(1E3, delay),
        delay = Math.max(80, delay)
      ) : delay = 80;

    for (const action of actions) {
      await this.#wait(emit_delay_ms);
      this.emit('chat-update', action);
    }
  }

  #pollMetadata() {
    const md_poller = setTimeout(() => {
      (async () => {
        const payload = {
          video_id: this.#video_info.basic_info.id,
          ctoken: undefined as string | undefined
        };

        if (this.#mcontinuation) {
          payload.ctoken = this.#mcontinuation;
        }

        const response = await this.#actions.livechat('updated_metadata', payload);
        const data = Parser.parseResponse(response.data);

        this.#mcontinuation = data.continuation?.token;
        this.#md_polling_interval_ms = data.continuation?.timeout_ms || this.#md_polling_interval_ms;

        this.metadata = {
          title: data.actions?.array().firstOfType(UpdateTitleAction) || this.metadata?.title,
          description: data.actions?.array().firstOfType(UpdateDescriptionAction) || this.metadata?.description,
          views: data.actions?.array().firstOfType(UpdateViewershipAction) || this.metadata?.views,
          likes: data.actions?.array().firstOfType(UpdateToggleButtonTextAction) || this.metadata?.likes,
          date: data.actions?.array().firstOfType(UpdateDateTextAction) || this.metadata?.date
        };

        this.emit('metadata-update', this.metadata);

        clearTimeout(md_poller);

        this.running && this.#pollMetadata();
      })().catch((err) => Promise.reject(err));
    }, this.#md_polling_interval_ms);
  }

  /**
   * Sends a message.
   */
  async sendMessage(text: string): Promise<ObservedArray<AddChatItemAction>> {
    const response = await this.#actions.livechat('live_chat/send_message', {
      text,
      ...{
        video_id: this.#video_info.basic_info.id,
        channel_id: this.#video_info.basic_info.channel_id
      }
    });

    const data = Parser.parseResponse(response.data);

    if (!data.actions)
      throw new InnertubeError('Response did not have an "actions" property. The call may have failed.');

    return data.actions.array().as(AddChatItemAction);
  }

  async getItemMenu(item: ChatItemHasMenuEndpoint): Promise<ItemMenu> {
    if (!item.menu_endpoint) {
      throw new InnertubeError('Response did not have an "menu_endpoint" property. The call may have failed.');
    }

    const response = await item.menu_endpoint.call(this.#actions, undefined, true);

    if (!response) {
      throw new InnertubeError('Response was undefined. The call may have failed.');
    }

    return new ItemMenu(response, this.#actions);
  }

  async selectButton(button: Button): Promise<ParsedResponse> {
    const endpoint = button.endpoint;
    const response = await endpoint.callTest(this.#actions, { parse: true });

    return response;
  }

  async #wait(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
  }
}

export default LiveChat;