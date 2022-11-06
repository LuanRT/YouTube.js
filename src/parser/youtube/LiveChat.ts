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

import Proto from '../../proto/index';
import { InnertubeError, uuidv4 } from '../../utils/Utils';
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

export type ChatItemWithMenu = LiveChatAutoModMessage | LiveChatMembershipItem | LiveChatPaidMessage | LiveChatPaidSticker | LiveChatTextMessage | LiveChatViewerEngagementMessage;

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
    (async () => {
      const endpoint = this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat';
      const response = await this.#actions.execute(endpoint, { continuation: this.#continuation });

      const data = Parser.parseResponse(response.data);
      const contents = data.continuation_contents;

      if (!(contents instanceof LiveChatContinuation))
        throw new InnertubeError('Continuation is not a LiveChatContinuation');

      this.#continuation = contents.continuation.token;

      // Header only exists in the first request
      if (contents.header) {
        this.initial_info = contents;
        this.emit('start', contents);
      } else {
        await this.#emitSmoothedActions(contents.actions);
      }

      // If there are no actions then we wait 1000 milliseconds, otherwise
      // The amount of items on the action queue will determine the polling interval.
      if (!contents.actions.length && !contents.header)
        await this.#wait(1000);

      if (this.running)
        this.#pollLivechat();
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
      const payload: {
        videoId: string | undefined;
        continuation?: string;
      } = { videoId: this.#video_info.basic_info.id };

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
    })();
  }

  /**
   * Sends a message.
   */
  async sendMessage(text: string): Promise<ObservedArray<AddChatItemAction>> {
    const response = await this.#actions.execute('/live_chat/send_message', {
      params: Proto.encodeMessageParams(this.#video_info.basic_info.channel_id as string, this.#video_info.basic_info.id as string),
      richMessage: { textSegments: [ { text } ] },
      clientMessageId: uuidv4(),
      parse: true
    });

    if (!response.actions)
      throw new InnertubeError('Response did not have an "actions" property. The call may have failed.');

    return response.actions.array().as(AddChatItemAction);
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