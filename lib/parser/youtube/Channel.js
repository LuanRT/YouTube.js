'use strict';

const TabbedFeed = require('../../core/TabbedFeed');

class Channel extends TabbedFeed {
  #tab;
  
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = {
      author: this.page.header.author,
      subscribers: this.page.header.subscribers.toString(),
      banner: this.page.header.banner,
      tv_banner: this.page.header.tv_banner,
      mobile_banner: this.page.header.mobile_banner,
      header_links: this.page.header.header_links
    }
    
    this.metadata = { ...this.page.metadata, ...this.page.microformat };
    
    this.sponsor_button = this.page.header.sponsor_button || null;
    this.subscribe_button = this.page.header.subscribe_button || null;
    
    const tab = this.page.contents.tabs.get({ selected: true });
    
    this.current_tab = tab;
  }
  
  async getVideos() {
    const tab = await this.getTab('Videos');
    return new Channel(this.actions, tab.page, true);
  }

  async getPlaylists() {
    const tab = await this.getTab('Playlists');
    return new Channel(this.actions, tab.page, true);
  }

  async getHome() {
    const tab = await this.getTab('Home');
    return new Channel(this.actions, tab.page, true);
  }

  async getCommunity() {
    const tab = await this.getTab('Community');
    return new Channel(this.actions, tab.page, true);
  }

  async getChannels() {
    const tab = await this.getTab('Channels');
    return new Channel(this.actions, tab.page, true);
  }

  /**
   * Retrieves the channel about page.
   * Note that this does not return a new {@link Channel} object.
   * 
   * @returns {Promise<import('../parser/contents/ChannelAboutFullMetadata')>}
   */
  async getAbout() {
    const tab = await this.getTab('About');
    return tab.memo.get('ChannelAboutFullMetadata')?.[0];
  }
}

module.exports = Channel;