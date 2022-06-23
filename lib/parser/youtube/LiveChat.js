'use strict';

const Parser = require('../contents');
const EventEmitter = require('events');

class LiveChat {
  ev;
  mode;
  
  #actions;
  #video_info;
  
  poll_intervals_ms = 1000;
  running = true;
  
  /**
   * @param {import('./VideoInfo')} video_info
   * @param {string} mode
   */
  constructor(video_info, mode) {
    this.#video_info = video_info;
    this.#actions = video_info.actions;
    
    this.mode = mode;
    
    this.ev = new EventEmitter();
    
    this.#init_polling();
  }
  
  #init_polling() {
    const continuation = this.#video_info.livechat.continuation;
    
    const poller = setInterval(() => {
      (async () => {
        const ctoken = continuation;
     
        const response = await this.#actions.livechat('live_chat/get_live_chat', { ctoken });
        const data = Parser.parseResponse(response.data);
        
      //  console.log(data)
      })();
    }, this.poll_intervals_ms);
  }
}

module.exports = LiveChat;