'use strict';

const EventEmitter = require('events');

class LiveChat {
  ev;
  mode;
  
  #video_info;
  
  poll_intervals_ms = 1000;
  running = true;
  
  /**
   * @param {import('./VideoInfo')} video_info
   * @param {string} mode
   */
  constructor(video_info, mode) {
    this.#video_info = video_info;
    this.mode = mode;
    
    this.ev = new EventEmitter();
    
    this.#init_polling();
  }
  
  #init_polling() {
    const poller = setInterval(() => {
      /** TODO: Implement this */
    }, this.poll_intervals_ms);
  }
}

module.exports = LiveChat;