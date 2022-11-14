import Actions from '../../core/Actions';
import TabbedFeed from '../../core/TabbedFeed';
import C4TabbedHeader from '../classes/C4TabbedHeader';
import CarouselHeader from '../classes/CarouselHeader';
import InteractiveTabbedHeader from '../classes/InteractiveTabbedHeader';
import ChannelAboutFullMetadata from '../classes/ChannelAboutFullMetadata';
import ChannelMetadata from '../classes/ChannelMetadata';
import MicroformatData from '../classes/MicroformatData';
import SubscribeButton from '../classes/SubscribeButton';
import Tab from '../classes/Tab';

import { InnertubeError } from '../../utils/Utils';
import FeedFilterChipBar from '../classes/FeedFilterChipBar';
import ChipCloudChip from '../classes/ChipCloudChip';
import FilterableFeed from '../../core/FilterableFeed';
import Feed from '../../core/Feed';

export default class Channel extends TabbedFeed {
  header;
  metadata;
  subscribe_button;
  current_tab;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    this.header = this.page.header?.item()?.as(C4TabbedHeader, CarouselHeader, InteractiveTabbedHeader);

    const metadata = this.page.metadata?.item().as(ChannelMetadata);
    const microformat = this.page.microformat?.as(MicroformatData);

    if (!metadata && !this.page.contents)
      throw new InnertubeError('Invalid channel', this);

    this.metadata = { ...metadata, ...(microformat || {}) };

    this.subscribe_button = this.page.header_memo.getType(SubscribeButton)?.[0];

    const tab = this.page.contents.item().key('tabs').parsed().array().filterType(Tab).get({ selected: true });

    this.current_tab = tab;
  }

  async applyFilter(filter: string | ChipCloudChip) {
    let target_filter: ChipCloudChip | undefined;

    const filter_chipbar = this.memo.getType(FeedFilterChipBar)?.[0];

    if (typeof filter === 'string') {
      target_filter = filter_chipbar?.contents.get({ text: filter });
      if (!target_filter)
        throw new InnertubeError(`Filter ${filter} not found`, { available_filters: this.filters });
    } else if (filter instanceof ChipCloudChip) {
      target_filter = filter;
    }

    if (!target_filter)
      throw new InnertubeError('Invalid filter', filter);

    const page = await target_filter.endpoint?.call(this.actions, { parse: true });
    return new FilteredChannelList(this.actions, page, true);
  }

  get filters(): string[] {
    return this.memo.getType(FeedFilterChipBar)?.[0]?.contents.filterType(ChipCloudChip).map((chip) => chip.text) || [];
  }

  async getHome() {
    const tab = await this.getTab('Home');
    return new Channel(this.actions, tab.page, true);
  }

  async getVideos() {
    const tab = await this.getTab('Videos');
    return new Channel(this.actions, tab.page, true);
  }

  async getShorts() {
    const tab = await this.getTab('Shorts');
    return new Channel(this.actions, tab.page, true);
  }

  async getLiveStreams() {
    const tab = await this.getTab('Live');
    return new Channel(this.actions, tab.page, true);
  }

  async getPlaylists() {
    const tab = await this.getTab('Playlists');
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

  /**
   * Retrives list continuation.
   */
  async getContinuation() {
    const page = await super.getContinuationData();
    return new ChannelListContinuation(this.actions, page, true);
  }
}

export class ChannelListContinuation extends Feed {
  contents;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);
    this.contents =
      this.page.on_response_received_actions?.[0] ||
      this.page.on_response_received_endpoints?.[0];
  }

  /**
   * Retrieves list continuation.
   */
  async getContinuation() {
    const page = await super.getContinuationData();
    return new ChannelListContinuation(this.actions, page, true);
  }
}

export class FilteredChannelList extends FilterableFeed {
  applied_filter: ChipCloudChip | undefined;
  contents;

  constructor(actions: Actions, data: any, already_parsed = false) {
    super(actions, data, already_parsed);

    this.applied_filter = this.memo.getType(ChipCloudChip).get({ is_selected: true });

    // Removes the filter chipbar from the actions list
    if (
      this.page.on_response_received_actions &&
      this.page.on_response_received_actions.length > 1
    ) {
      this.page.on_response_received_actions.shift();
    }

    this.contents = this.page.on_response_received_actions?.[0];
  }

  /**
   * Applies given filter to the list.
   * @param filter - The filter to apply
   */
  async applyFilter(filter: string | ChipCloudChip) {
    const feed = await super.getFilteredFeed(filter);
    return new FilteredChannelList(this.actions, feed.page, true);
  }

  /**
   * Retrieves list continuation.
   */
  async getContinuation() {
    const page = await super.getContinuationData();

    // Keep the filters
    page?.on_response_received_actions_memo.set('FeedFilterChipBar', this.memo.getType(FeedFilterChipBar));
    page?.on_response_received_actions_memo.set('ChipCloudChip', this.memo.getType(ChipCloudChip));

    return new FilteredChannelList(this.actions, page, true);
  }
}