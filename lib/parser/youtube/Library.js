'use strict';

const Parser = require('../contents');
const History = require('./History');

/** @namespace */
class Library {
  #actions;
  #page;
  
  /**
   * @param {object} response - API response.
   * @param {import('../../core/Actions')} actions
   */
  constructor(response, actions) {
    this.#actions = actions;
    this.#page = Parser.parseResponse(response);
  
    const tab = this.#page.contents.tabs.get({ selected: true });
    const shelves = tab.content.contents.map((section) => section.contents[0]);
    
    const stats = this.#page.contents.secondary_contents.items.get({ type: 'profileColumnStatsRenderer' }).items;
    const user_info = this.#page.contents.secondary_contents.items.get({ type: 'profileColumnUserInfoRenderer' });
    
    this.profile = { stats, user_info };
    
    this.sections = shelves.map((shelf) => ({
      title: shelf.title.text,
      items: shelf.content.items,
      type: shelf.icon_type,
      getAll: () => this.#getAll(shelf)
    }));
  }
  
  async #getAll(shelf) {
    if (!shelf.menu?.top_level_buttons) 
      throw new Error('The ' + shelf.title.text + ' section doesn\'t have more items');
    
    const button = await shelf.menu.top_level_buttons.get({ text: 'See all' });
    const page = await button.endpoint.call(this.#actions);
    
    switch (shelf.icon_type) {
      case 'WATCH_HISTORY':
        return new History(page, this.#actions);
      case 'WATCH_LATER':
        // TODO
        break;
      case 'LIKE':
        // TODO
        break;
      case 'CONTENT_CUT':
        // TODO
        break;
      default:
    }
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = Library;