const ResultsParser = require('../parser/contents');
const { InnertubeError } = require('../utils/Utils');
const Feed = require('./Feed');

class TabbedFeed extends Feed {
  #page;
  /**
   * @type {import('../parser/contents/classes/Tab')[]}
   */
  #tabs;
  #actions;
  constructor (actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.#actions = actions;
    this.#page = already_parsed ? data : ResultsParser.parseResponse(data);
    this.#tabs = this.#page.contents_memo.get('Tab');
  }

  get tabs() {
    return this.#tabs.map(tab => tab.title.toString());
  }

  /**
   * 
   * @param {string} title title of the tab to get
   * @returns {Promise<TabbedFeed>}
   */
  async getTab(title) {
    const tab = this.#tabs.find(tab => tab.title.toLowerCase() === title.toLowerCase());
    if (!tab) throw new InnertubeError(`Tab "${title}" not found`);
    
    if (tab.selected) return this;

    const response = await tab.endpoint.call(this.#actions);

    return new TabbedFeed(this.#actions, response, true);
  }

  get title() {
    return this.#page.contents_memo('Tab')?.find(tab => tab.selected)?.title.toString();
  }

  get page() {
    return this.#page;
  }
}

module.exports = TabbedFeed;