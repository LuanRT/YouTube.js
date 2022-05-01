const ResultsParser = require("../parser/contents");
const Simplify = require("../parser/simplify");
const { InnertubeError } = require("../utils/Utils");
const SimpleVideo = require("./SimpleVideo");

class TrendingTab {
  /**
   * @type {import('../parser/contents/Tab')} 
   */
  #tab;
  #session;
  /**
   * @param {import('../parser/contents/Tab')} tab 
   */
  constructor(session, tab) {
    this.#tab = tab;
    this.#session = session;
  }

  get title() {
    return this.#tab.title;
  }

  /**
   * @returns {import('../parser/contents/Shelf')[]}
   */
  getShelfs() {
    return Simplify.matching({
      type: Simplify.matching(/^Shelf$/),
    }).runOn(this.#tab.content);
  }

  getShelf(title) {
    return this.getAllShelves().find(shelf => shelf.title.toString() === title);
  }

  /**
   * @type {{
   *  title: string,
   *  videos: SimpleVideo[]
   * }[] | null}
   */
  get content() {
    if (!this.#tab.content) return null;
    const shelfs = this.getShelfs();
    const ret = shelfs.map(shelf => {
      return {
        title: shelf.title.toString(),
        videos: Simplify.matching({
          type: Simplify.matching(SimpleVideo.regex),
        }).runOn(shelf.content).map(video => new SimpleVideo(video)),
      }
    });
    return ret;
  }

  /**
   * Selects this tab and returns a new TrendingTab with this tab selected
   */
  async getSelected() {
    if (this.#tab.selected) return this;
    const response = await this.#tab.endpoint.call(this.#session);
    if (!response.success) throw new InnertubeError('Failed to get selected tab', response);
    return new Trending(this.#session, response.data).getTab(this.title);
  }

  /**
   * @note getVideos returns only the vidoes of the first shelf
   * @returns {SimpleVideo[]}
   */
  async getVideos() {
    if (this.#tab.selected) return this.content[0]?.videos;
    return (await this.getSelected()).content[0]?.videos;
  }

  get raw() {
    return this.#tab;
  }
}

class Trending {
  #page;
  /**
   * @type {import('../parser/contents/Tab')[]}
   */
  #tabs;
  #session;
  constructor (session, data) {
    this.#session = session;
    this.#page = ResultsParser.parseResponse(data);
    this.#tabs = Simplify.matching({
      type: Simplify.matching(/^Tab$/),
    }).runOn(this.#page);
  }

  /**
   * 
   * @param {string} title title of the tab to get
   * @returns 
   */
  getTab(title) {
    const tab = this.#tabs.find(tab => tab.title.toLowerCase() === title.toLowerCase());
    if (!tab) throw new InnertubeError(`Tab ${name} not found`);
    return new TrendingTab(this.#session, tab);
  }

  /**
   * @alias getTab('now')
   */
  get now() {
    return this.getTab('now');
  }

  /**
   * @alias getTab('music')
   */
  get music() {
    return this.getTab('music');
  }

  get page() {
    return this.#page;
  }
}

module.exports = { Trending, TrendingTab };