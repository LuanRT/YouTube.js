'use strict';

/** @namespace */
class History {
  #page;
  #actions;
  #continuation;
  
  /**
   * @param {object} page - parsed data.
   * @param {import('./Actions')} actions
   * @param {boolean} is_continuation
   * @constructor
   */
  constructor(page, actions, is_continuation) {
    this.#page = page;
    this.#actions = actions;
    
    const tab = page.contents?.tabs.get({ selected: true });
 
    const contents = is_continuation 
      && page.continuation_items
      || tab.content.contents;
    
    this.sections = contents.map((section) => {
      if (section.type == 'continuationItemRenderer') {
        this.#continuation = section;
        return;
      }
      
      return {
        title: section.header.title,
        items: section.contents
      }
    });
    
    this.has_continuation && this.sections.pop();
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