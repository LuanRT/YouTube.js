'use strict';

const { observe } = require('../../utils/Utils');

/** @namespace */
class History {
  #page;
  #actions;
  #continuation;
  
  /**
   * @param {object} page - parsed data.
   * @param {import('../../core/Actions')} actions
   * @param {boolean} is_continuation
   */
  constructor(page, actions, is_continuation) {
    this.#page = page;
    this.#actions = actions;
    
    const tab = page.contents?.tabs.get({ selected: true });
    const secondary_contents = page.contents?.secondary_contents;
    
    const contents = is_continuation 
      && page.continuation_items
      || tab.content.contents;
    
    this.#continuation = contents.get({ type: 'ContinuationItem' }, true);
    
    this.feed_actions = secondary_contents?.contents || null;
    
    this.sections = observe(contents.map((section) => ({
      title: section.header.title,
      items: section.contents
    })));
  }
  
  async getContinuation() {
    const response = await this.#continuation.endpoint.call(this.#actions);
    return new History(response.on_response_received_actions[0], this.#actions, true);
  }
  
  get has_continuation() {
    return !!this.#continuation;
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = History;