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
      /** @type {string} */
      text: description_shelf.description.toString(),
      /** @type {Text} */
      footer: description_shelf.footer
    }
  }
  
  /**
   * Retrieves up next.
   * @param {string} video_id
   */
  async getUpNext(video_id) {
    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
    
    const data = Parser.parseResponse(response.data);
    const tab = data.contents.tabs.get({ title: 'Up next' });
    
    const upnext_content = tab.content.content;
    if (!upnext_content) throw new InnertubeError('Invalid id', video_id);
    
    return {
      /** @type {string} */
      id: upnext_content.playlist_id,
      /** @type {string} */
      title: upnext_content.title,
      /** @type {boolean} */
      is_editable: upnext_content.is_editable,
      /** @type {import('../parser/contents/classes/PlaylistPanelVideo')[]} */
      items: observe(upnext_content.contents)
    }
  }
  
  /**
   * Retrieves related content.
   * @param {string} video_id
   */
  async getRelated(video_id) {
    const response = await this.#actions.next({ video_id, client: 'YTMUSIC' });
    
    const data = Parser.parseResponse(response.data);
    const tab = data.contents.tabs.get({ title: 'Related' });
    
    const page = await tab.endpoint.call(this.#actions, 'YTMUSIC');
    if (!page) throw new InnertubeError('Invalid video id');
    
    const shelves = page.contents.contents.findAll({ type: 'musicCarouselShelfRenderer' });
    const info = page.contents.contents.get({ type: 'musicDescriptionShelfRenderer' });
    
    return {
      /** @type {{ header: import('../parser/contents/classes/MusicCarouselShelfBasicHeader'); items: object[]; }[]} */
      sections: observe(shelves.map((shelf) => ({
        header: shelf.header,
        items: shelf.contents
      }))),
      /** @type {string} */
      info: info?.description.toString() || ''
    }
  }
}

module.exports = Music;