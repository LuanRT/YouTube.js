import Parser, { LiveChatContinuation } from '../index';
import EventEmitter from '../../utils/EventEmitterLike';
import VideoInfo from './VideoInfo';
import { InnertubeError } from '../../utils/Utils';
import UpdateTitleAction from '../classes/livechat/UpdateTitleAction';
import UpdateDescriptionAction from '../classes/livechat/UpdateDescriptionAction';
import UpdateViewershipAction from '../classes/livechat/UpdateViewershipAction';
import UpdateDateTextAction from '../classes/livechat/UpdateDateTextAction';
import { ObservedArray, YTNode } from '../helpers';
import UpdateToggleButtonTextAction from '../classes/livechat/UpdateToggleButtonTextAction';
import AddChatItemAction from '../classes/livechat/AddChatItemAction';

class LiveChat extends EventEmitter {
  #actions;
  #video_info;
  #continuation;
  #mcontinuation?: string;
  #lc_polling_interval_ms = 1000;
  #md_polling_interval_ms = 5000;
  initial_info?: LiveChatContinuation;
  live_metadata;
  metadata?: {
    title: UpdateTitleAction | undefined;
    description: UpdateDescriptionAction | undefined;
    views: UpdateViewershipAction | undefined;
    likes: UpdateToggleButtonTextAction | undefined;
    date: UpdateDateTextAction | undefined;
  };
  running = false;
  is_replay = false;
  constructor(video_info: VideoInfo) {
    super();
    if (!video_info.livechat)
      throw new InnertubeError('Video has no livechat');
    this.#video_info = video_info;
    this.#actions = video_info.actions;
    this.#continuation = this.#video_info.livechat!.continuation;
    this.is_replay = this.#video_info.livechat!.is_replay;
    this.live_metadata = {
      title: null as UpdateTitleAction | null,
      description: null as UpdateDescriptionAction | null,
      views: null as UpdateViewershipAction | null,
      likes: null as UpdateToggleButtonTextAction | null,
      date: null as UpdateDateTextAction | null
    };
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
        if (!(contents instanceof LiveChatContinuation)) {
          throw new InnertubeError('Continuation is not a LiveChatContinuation');
        }
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
    const emit_delay_ms = delay == 1 ? (delay = base / actions.length,
    delay *= Math.random() + 0.5,
    delay = Math.min(1E3, delay),
    delay = Math.max(80, delay)) : delay = 80;
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
  async sendMessage(text: string) {
    const response = await this.#actions.livechat('live_chat/send_message', {
      text,
      ...{
        video_id: this.#video_info.basic_info.id,
        channel_id: this.#video_info.basic_info.channel_id
      }
    });
    const data = Parser.parseResponse(response.data);
    return data.actions?.array().as(AddChatItemAction);
  }
  async #wait(ms: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
  }
}
export default LiveChat;
