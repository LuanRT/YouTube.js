'use strict';

const Parser = require('../contents');

/** @namespace */
class Explore {
  #page;
  
  /**
   * @param {object} response - API response.
   * @param {import('../../core/Actions')} actions
   */
  constructor(response) {
    this.#page = Parser.parseResponse(response.data);
    
    const tab = this.page.contents.tabs.get({ selected: true });
    
    this.top_buttons = tab.content.contents.get({ type: 'Grid' }).items;
    this.sections = tab.content.contents.findAll({ type: 'MusicCarouselShelf' });
  }
  
  get page() {
    return this.#page;
  }
}

module.exports = Explore;