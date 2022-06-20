'use strict';

const Feed = require('../../core/Feed');

// TODO: make filter actions usable

/** @namespace */
class History extends Feed {
  /**
   * @param {import('../../core/Actions')} actions
   * @param {object} data - parsed data.
   * @param {boolean} already_parsed
   */
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed)
    
    this.sections = this.memo.get('ItemSection');
    this.feed_actions = this.memo.get('BrowseFeedActions')?.[0] || [];
  }
  
  /**
   * Retrieves next batch of contents.
   * 
   * @returns {Promise.<History>}
   */
  async getContinuation() {
    const continuation = await this.getContinuationData();
    return new History(this.actions, continuation, true);
  }
}

module.exports = History;