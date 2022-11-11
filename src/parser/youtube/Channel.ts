import Actions from '../../core/Actions';
import TabbedFeed from '../../core/TabbedFeed';
import Button from '../classes/Button';
import C4TabbedHeader from '../classes/C4TabbedHeader';
import CarouselHeader from '../classes/CarouselHeader';
import ChannelAboutFullMetadata from '../classes/ChannelAboutFullMetadata';
import ChannelMetadata from '../classes/ChannelMetadata';
import MicroformatData from '../classes/MicroformatData';
import SubscribeButton from '../classes/SubscribeButton';
import Tab from '../classes/Tab';

class Channel extends TabbedFeed {
  header;
  metadata;
  sponsor_button;
  subscribe_button;
  current_tab;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    this.header = this.page.header?.item().as(C4TabbedHeader, CarouselHeader);

    const metadata = this.page.metadata.item().as(ChannelMetadata);
    const microformat = this.page.microformat?.as(MicroformatData);

    this.metadata = { ...metadata, ...(microformat || {}) };

    this.sponsor_button = this.page.header_memo.getType(Button)?.[0];
    this.subscribe_button = this.page.header_memo.getType(SubscribeButton)?.[0];

    const tab = this.page.contents.item().key('tabs').parsed().array().filterType(Tab).get({ selected: true });

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
   */
  async getAbout() {
    const tab = await this.getTab('About');
    return tab.memo.getType(ChannelAboutFullMetadata)?.[0];
  }
}

export default Channel;