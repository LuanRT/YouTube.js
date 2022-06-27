'use strict';

const Parser = require('../contents');
const EventEmitter = require('events');

class LiveChat {
  ev;
  mode;
  
  #actions;
  #video_info;
  #continuation;
  #mcontinuation ;
  
  #lc_poll_intervals_ms = 1000;
  #md_poll_intervals_ms = 5000;
  
  initial_info;
  live_metadata;
  
  running = false;
  is_replay = false;
  
  /**
   * @param {import('./VideoInfo')} video_info
   * @param {string} mode
   */
  constructor(video_info, mode) {
    this.#video_info = video_info;
    this.#actions = video_info.actions;
    this.#continuation = this.#video_info.livechat.continuation;
    this.is_replay = this.#video_info.livechat.is_replay;
    
    this.mode = mode;
    
    this.live_metadata = {
      /** @type {import('../contents/classes/livechat/metadata/UpdateTitleAction')} */
      title: null,
      /** @type {import('../contents/classes/livechat/metadata/UpdateDescriptionAction')} */
      description : null,
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
        const endpoint = this.is_replay ? 'live_chat/get_live_chat_replay' : 'live_chat/get_live_chat';
        const response = await this.#actions.livechat(endpoint, { ctoken: this.#continuation });
    
        const data = Parser.parseResponse(response.data);
        const contents = data.continuation_contents;
        
        this.#continuation = contents.continuation.token;
        this.#lc_poll_intervals_ms = contents.continuation.timeout_ms;
   
        // Header only exists in the first request 
        if (contents.header) {
          this.initial_info = contents;
          this.ev.emit('start', contents);
        } else {
          await this.#enqueueActionGroup(contents.actions);
        }
        
        clearTimeout(lc_poller);
        
        this.running && this.#pollLivechat();
      })().catch((err) => Promise.reject(err));
    }, this.#lc_poll_intervals_ms);
  }
  
  async #enqueueActionGroup(actions) {
    for (const action of actions) {
      await this.#wait(600);
      this.ev.emit('chat-update', action);
    }
  }
  
  #pollMetadata() {
    const md_poller = setTimeout(() => {
      (async () => {
        const payload = { video_id: this.#video_info.basic_info.id };
   
        this.#mcontinuation  &&
          (payload.ctoken = this.#mcontinuation);
      
        const response = await this.#actions.livechat('updated_metadata', payload);
        const data = Parser.parseResponse(response.data);
    
        this.#mcontinuation = data.continuation.token;
        this.#md_poll_intervals_ms = data.continuation.timeout_ms;
    
        this.metadata = {
          title: data.actions.get({ type: 'UpdateTitleAction' }) || this.metadata?.title,
          description : data.actions.get({ type: 'UpdateDescriptionAction' }) || this.metadata?.description,
          views: data.actions.get({ type: 'UpdateViewershipAction' }) || this.metadata?.views,
          likes: data.actions.get({ type: 'UpdateToggleButtonTextAction' }) || this.metadata?.likes,
          date: data.actions.get({ type: 'UpdateDateTextAction' }) || this.metadata?.date
        };
    
        this.ev.emit('metadata-update', this.metadata);
 
        clearTimeout(md_poller);
        
        this.running && this.#pollMetadata();
      })().catch((err) => Promise.reject(err));
    }, this.#md_poll_intervals_ms);
  }
  
  async #wait(ms) {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
  }
}

module.exports = LiveChat;