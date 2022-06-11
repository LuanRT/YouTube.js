'use strict';

const Search = require('../parser/ytmusic/Search');
const Parser = require('../parser/contents');
const { InnertubeError, observe } = require('../utils/Utils');

/** @namespace */
class Music {
  #session;
  #actions;
  
  /**
   * @param {Innertube} session
   * @constructor
   */
  constructor(session) {
    this.#session = session;
    this.#actions = session.actions;
  }
  
  /**
   * Search on YouTube Music.
   * 
   * @param {string} query
   * @param {object} filters - search filters
   * @param {string} [filters.type] - all | song | video | album | playlist | artist
   * 
   * @returns {Promise.<Search>}
   */
  async search(query, filters) {
    const response = await this.#actions.search({ query, filters, client: 'YTMUSIC' });
    return new Search(response, this.#actions, { is_filtered: filters?.hasOwnProperty('type') && filters.type !== 'all' });
  }
  
  /**
   * Retrieves song lyrics.
   * @param {string} video_id
   * @returns {Promise.<{ text: string; footer: Text }>}
   */
  async getLyrics(video_id) {
    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
    
    const data = Parser.parseResponse(response.data);
    const tab = data.contents.tabs.get({ title: 'Lyrics' });
    
    const page = await tab.endpoint.call(this.#actions, 'YTMUSIC');
    if (!page) throw new InnertubeError('Invalid video id');
    
    if (page.contents.constructor.name === 'Message')
      throw new InnertubeError(page.contents.text, video_id);
    
    const description_shelf = page.contents.contents.get({ type: 'musicDescriptionShelfRenderer' });
    
    return {
      text: description_shelf.description.toString(),
      footer: description_shelf.footer
    }
  }
  
  /**
   * Retrieves related content.
   * @param {string} video_id
   * @returns {Promise.<{ sections: { header: import('../parser/contents/classes/MusicCarouselShelfBasicHeader'); items: any[]; }[]; info: string }>}
   */
  async getRelated(video_id) {
    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
    
    const data = Parser.parseResponse(response.data);
    const tab = data.contents.tabs.get({ title: 'Related' });
    
    const page = await tab.endpoint.call(this.#actions, 'YTMUSIC');
    if (!page) throw new InnertubeError('Invalid video id');
    
    const shelves = page.contents.contents.findAll({ type: 'musicCarouselShelfRenderer' });
    const info = page.contents.contents.get({ type: 'musicDescriptionShelfRenderer' });
    
    const results = {
      sections: observe(shelves.map((shelf) => ({
        header: shelf.header,
        items: shelf.contents
      }))),
      info: info?.description.toString() || null
    }
    
    return results;
  }
}

module.exports = Music;