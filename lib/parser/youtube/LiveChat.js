'use strict';

const Parser = require('../contents');
const EventEmitter = require('events');

class LiveChat {
  ev;

  #actions;
  #video_info;
  #continuation;
  #mcontinuation;

  #lc_polling_interval_ms = 1000;
  #md_polling_interval_ms = 5000;

  initial_info;
  live_metadata;

  running = false;
  is_replay = false;

  /**
   * @param {import('./VideoInfo')} video_info
   */
  constructor(video_info) {
    this.#video_info = video_info;
    this.#actions = video_info.actions;
    this.#continuation = this.#video_info.livechat.continuation;
    this.is_replay = this.#video_info.livechat.is_replay;

    this.live_metadata = {
      /** @type {import('../contents/classes/livechat/metadata/UpdateTitleAction')} */
      title: null,
      /** @type {import('../contents/classes/livechat/metadata/UpdateDescriptionAction')} */
      description: null,
      /** @type {import('../contents/classes/livechat/metadata/UpdateViewershipAction')} */
      views: null,
      /** @type {import('../contents/classes/livechat/metadata/UpdateTitleAction')} */
      likes: null,
      /** @type {import('../contents/classes/livechat/metadata/UpdateDateTextAction')} */
      date: null
    };

    this.ev = new EventEmitter();
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
        const endpoint = this.is_replay ? 'live_chat/get_live_chat_replay': 'live_chat/get_live_chat';
        const response = await this.#actions.livechat(endpoint, { ctoken: this.#continuation });

        const data = Parser.parseResponse(response.data);
        const contents = data.continuation_contents;

        this.#continuation = contents.continuation.token;
        this.#lc_polling_interval_ms = contents.continuation.timeout_ms;

        // Header only exists in the first request
        if (contents.header) {
          this.initial_info = contents;
          this.ev.emit('start', contents);
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
   * @param {object} actions
   */
  async #emitSmoothedActions(actions) {
    let base = 1E4;
    let delay = actions.length < base / 80 ? 1: 0;

    const emit_delay_ms =
      delay == 1 ? (
        delay = base / actions.length,
        delay *= Math.random() + 0.5,
        delay = Math.min(1E3, delay),
        delay = Math.max(80, delay)
      ): delay = 80;

    for (const action of actions) {
      await this.#wait(emit_delay_ms);
      this.ev.emit('chat-update', action);
    }
  }

  #pollMetadata() {
    const md_poller = setTimeout(() => {
      (async () => {
        const payload = { video_id: this.#video_info.basic_info.id };

        this.#mcontinuation &&
          (payload.ctoken = this.#mcontinuation);

        const response = await this.#actions.livechat('updated_metadata', payload);
        const data = Parser.parseResponse(response.data);

        this.#mcontinuation = data.continuation.token;
        this.#md_polling_interval_ms = data.continuation.timeout_ms;

        this.metadata = {
          title: data.actions.get({
            type: 'UpdateTitleAction'
          }) || this.metadata?.title,
          description: data.actions.get({
            type: 'UpdateDescriptionAction'
          }) || this.metadata?.description,
          views: data.actions.get({
            type: 'UpdateViewershipAction'
          }) || this.metadata?.views,
          likes: data.actions.get({
            type: 'UpdateToggleButtonTextAction'
          }) || this.metadata?.likes,
          date: data.actions.get({
            type: 'UpdateDateTextAction'
          }) || this.metadata?.date
        };

        this.ev.emit('metadata-update', this.metadata);

        clearTimeout(md_poller);

        this.running && this.#pollMetadata();
      })().catch((err) => Promise.reject(err));
    }, this.#md_polling_interval_ms);
  }

  /**
   * Sends a message.
   * @param {string} text
   * @returns {Promise.<import('../contents/classes/livechat/AddChatItemAction')[]>}
   */
  async sendMessage(text) {
    const response = await this.#actions.livechat('live_chat/send_message', {
      text,
      ... {
        video_id: this.#video_info.basic_info.id,
        channel_id: this.#video_info.basic_info.channel_id
      }
    });

    const data = Parser.parseResponse(response.data);
    return data.actions;
  }

  async #wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
  }
}

module.exports = LiveChat;