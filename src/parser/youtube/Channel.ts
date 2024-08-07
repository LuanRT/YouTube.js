import Feed from '../../core/mixins/Feed.js';
import FilterableFeed from '../../core/mixins/FilterableFeed.js';
import { ChannelError, InnertubeError } from '../../utils/Utils.js';

import TabbedFeed from '../../core/mixins/TabbedFeed.js';
import C4TabbedHeader from '../classes/C4TabbedHeader.js';
import CarouselHeader from '../classes/CarouselHeader.js';
import ChannelAboutFullMetadata from '../classes/ChannelAboutFullMetadata.js';
import AboutChannel from '../classes/AboutChannel.js';
import ChannelMetadata from '../classes/ChannelMetadata.js';
import InteractiveTabbedHeader from '../classes/InteractiveTabbedHeader.js';
import MicroformatData from '../classes/MicroformatData.js';
import SubscribeButton from '../classes/SubscribeButton.js';
import ExpandableTab from '../classes/ExpandableTab.js';
import SectionList from '../classes/SectionList.js';
import Tab from '../classes/Tab.js';
import PageHeader from '../classes/PageHeader.js';
import TwoColumnBrowseResults from '../classes/TwoColumnBrowseResults.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import FeedFilterChipBar from '../classes/FeedFilterChipBar.js';
import ChannelSubMenu from '../classes/ChannelSubMenu.js';
import SortFilterSubMenu from '../classes/SortFilterSubMenu.js';
import ContinuationItem from '../classes/ContinuationItem.js';
import NavigationEndpoint from '../classes/NavigationEndpoint.js';

import type { AppendContinuationItemsAction, ReloadContinuationItemsCommand } from '../index.js';
import type { ApiResponse, Actions } from '../../core/index.js';
import type { IBrowseResponse } from '../types/index.js';

export default class Channel extends TabbedFeed<IBrowseResponse> {
  header?: C4TabbedHeader | CarouselHeader | InteractiveTabbedHeader | PageHeader;
  metadata;
  subscribe_button?: SubscribeButton;
  current_tab?: Tab | ExpandableTab;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);

    this.header = this.page.header?.item()?.as(C4TabbedHeader, CarouselHeader, InteractiveTabbedHeader, PageHeader);

    const metadata = this.page.metadata?.item().as(ChannelMetadata);
    const microformat = this.page.microformat?.as(MicroformatData);

    if (this.page.alerts) {
      const alert = this.page.alerts.first();
      if (alert?.alert_type === 'ERROR') {
        throw new ChannelError(alert.text.toString());
      }
    }

    if (!metadata && !this.page.contents)
      throw new InnertubeError('Invalid channel', this);

    this.metadata = { ...metadata, ...(microformat || {}) };

    this.subscribe_button = this.page.header_memo?.getType(SubscribeButton).first();

    this.current_tab = this.page.contents?.item().as(TwoColumnBrowseResults).tabs.array().filterType(Tab, ExpandableTab).get({ selected: true });
  }

  /**
   * Applies given filter to the list. Use {@link filters} to get available filters.
   * @param filter - The filter to apply
   */
  async applyFilter(filter: string | ChipCloudChip): Promise<FilteredChannelList> {
    let target_filter: ChipCloudChip | undefined;

    const filter_chipbar = this.memo.getType(FeedFilterChipBar).first();

    if (typeof filter === 'string') {
      target_filter = filter_chipbar?.contents.get({ text: filter });
      if (!target_filter)
        throw new InnertubeError(`Filter ${filter} not found`, { available_filters: this.filters });
    } else if (filter instanceof ChipCloudChip) {
      target_filter = filter;
    }

    if (!target_filter)
      throw new InnertubeError('Invalid filter', filter);

    const page = await target_filter.endpoint?.call<IBrowseResponse>(this.actions, { parse: true });

    if (!page)
      throw new InnertubeError('No page returned', { filter: target_filter });

    return new FilteredChannelList(this.actions, page, true);
  }

  /**
   * Applies given sort filter to the list. Use {@link sort_filters} to get available filters.
   * @param sort - The sort filter to apply
   */
  async applySort(sort: string): Promise<Channel> {
    const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu).first();

    if (!sort_filter_sub_menu)
      throw new InnertubeError('No sort filter sub menu found');

    const target_sort = sort_filter_sub_menu?.sub_menu_items?.find((item) => item.title === sort);

    if (!target_sort)
      throw new InnertubeError(`Sort filter ${sort} not found`, { available_sort_filters: this.sort_filters });

    if (target_sort.selected)
      return this;

    const page = await target_sort.endpoint?.call<IBrowseResponse>(this.actions, { parse: true });

    return new Channel(this.actions, page, true);
  }

  /**
   * Applies given content type filter to the list. Use {@link content_type_filters} to get available filters.
   * @param content_type_filter - The content type filter to apply
   */
  async applyContentTypeFilter(content_type_filter: string): Promise<Channel> {
    const sub_menu = this.current_tab?.content?.as(SectionList).sub_menu?.as(ChannelSubMenu);

    if (!sub_menu)
      throw new InnertubeError('Sub menu not found');

    const item = sub_menu.content_type_sub_menu_items.find((item) => item.title === content_type_filter);

    if (!item)
      throw new InnertubeError(`Sub menu item ${content_type_filter} not found`, { available_filters: this.content_type_filters });

    if (item.selected)
      return this;

    const page = await item.endpoint?.call<IBrowseResponse>(this.actions, { parse: true });

    return new Channel(this.actions, page, true);
  }

  get filters(): string[] {
    return this.memo.getType(FeedFilterChipBar)?.[0]?.contents.filterType(ChipCloudChip).map((chip) => chip.text) || [];
  }

  get sort_filters(): string[] {
    const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu).first();
    return sort_filter_sub_menu?.sub_menu_items?.map((item) => item.title) || [];
  }

  get content_type_filters(): string[] {
    const sub_menu = this.current_tab?.content?.as(SectionList).sub_menu?.as(ChannelSubMenu);
    return sub_menu?.content_type_sub_menu_items.map((item) => item.title) || [];
  }

  async getHome(): Promise<Channel> {
    const tab = await this.getTabByURL('featured');
    return new Channel(this.actions, tab.page, true);
  }

  async getVideos(): Promise<Channel> {
    const tab = await this.getTabByURL('videos');
    return new Channel(this.actions, tab.page, true);
  }

  async getShorts(): Promise<Channel> {
    const tab = await this.getTabByURL('shorts');
    return new Channel(this.actions, tab.page, true);
  }

  async getLiveStreams(): Promise<Channel> {
    const tab = await this.getTabByURL('streams');
    return new Channel(this.actions, tab.page, true);
  }

  async getReleases(): Promise<Channel> {
    const tab = await this.getTabByURL('releases');
    return new Channel(this.actions, tab.page, true);
  }

  async getPodcasts(): Promise<Channel> {
    const tab = await this.getTabByURL('podcasts');
    return new Channel(this.actions, tab.page, true);
  }

  async getPlaylists(): Promise<Channel> {
    const tab = await this.getTabByURL('playlists');
    return new Channel(this.actions, tab.page, true);
  }

  async getCommunity(): Promise<Channel> {
    const tab = await this.getTabByURL('community');
    return new Channel(this.actions, tab.page, true);
  }

  /**
   * Retrieves the about page.
   * Note that this does not return a new {@link Channel} object.
   */
  async getAbout(): Promise<ChannelAboutFullMetadata | AboutChannel> {
    if (this.hasTabWithURL('about')) {
      const tab = await this.getTabByURL('about');
      return tab.memo.getType(ChannelAboutFullMetadata)[0];
    }

    const tagline = this.header?.is(C4TabbedHeader) && this.header.tagline;

    if (tagline || this.header?.is(PageHeader) && this.header.content?.description) {
      if (tagline && tagline.more_endpoint instanceof NavigationEndpoint) {
        const response = await tagline.more_endpoint.call(this.actions);

        const tab = new TabbedFeed<IBrowseResponse>(this.actions, response, false);
        return tab.memo.getType(ChannelAboutFullMetadata)[0];
      }

      const endpoint = this.page.header_memo?.getType(ContinuationItem)[0]?.endpoint;

      if (!endpoint) {
        throw new InnertubeError('Failed to extract continuation to get channel about');
      }

      const response = await endpoint.call<IBrowseResponse>(this.actions, { parse: true });

      if (!response.on_response_received_endpoints_memo) {
        throw new InnertubeError('Unexpected response while fetching channel about', { response });
      }

      return response.on_response_received_endpoints_memo.getType(AboutChannel)[0];
    }

    throw new InnertubeError('About not found');
  }

  /**
   * Searches within the channel.
   */
  async search(query: string): Promise<Channel> {
    const tab = this.memo.getType(ExpandableTab)?.[0];

    if (!tab)
      throw new InnertubeError('Search tab not found', this);

    const page = await tab.endpoint?.call<IBrowseResponse>(this.actions, { query, parse: true });

    return new Channel(this.actions, page, true);
  }

  get has_home(): boolean {
    return this.hasTabWithURL('featured');
  }

  get has_videos(): boolean {
    return this.hasTabWithURL('videos');
  }

  get has_shorts(): boolean {
    return this.hasTabWithURL('shorts');
  }

  get has_live_streams(): boolean {
    return this.hasTabWithURL('streams');
  }

  get has_releases(): boolean {
    return this.hasTabWithURL('releases');
  }

  get has_podcasts(): boolean {
    return this.hasTabWithURL('podcasts');
  }

  get has_playlists(): boolean {
    return this.hasTabWithURL('playlists');
  }

  get has_community(): boolean {
    return this.hasTabWithURL('community');
  }

  get has_about(): boolean {
    // Game topic channels still have an about tab, user channels have switched to the popup
    return this.hasTabWithURL('about') ||
      !!(this.header?.is(C4TabbedHeader) && this.header.tagline?.more_endpoint) ||
      !!(this.header?.is(PageHeader) && this.header.content?.description?.more_endpoint);
  }

  get has_search(): boolean {
    return this.memo.getType(ExpandableTab)?.length > 0;
  }

  /**
   * Retrives list continuation.
   */
  async getContinuation(): Promise<ChannelListContinuation> {
    const page = await super.getContinuationData();
    if (!page)
      throw new InnertubeError('Could not get continuation data');
    return new ChannelListContinuation(this.actions, page, true);
  }
}

export class ChannelListContinuation extends Feed<IBrowseResponse> {
  contents?: ReloadContinuationItemsCommand | AppendContinuationItemsAction;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);
    this.contents =
      this.page.on_response_received_actions?.first() ||
      this.page.on_response_received_endpoints?.first();
  }

  /**
   * Retrieves list continuation.
   */
  async getContinuation(): Promise<ChannelListContinuation> {
    const page = await super.getContinuationData();
    if (!page)
      throw new InnertubeError('Could not get continuation data');
    return new ChannelListContinuation(this.actions, page, true);
  }
}

export class FilteredChannelList extends FilterableFeed<IBrowseResponse> {
  applied_filter?: ChipCloudChip;
  contents?: ReloadContinuationItemsCommand | AppendContinuationItemsAction;

  constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed = false) {
    super(actions, data, already_parsed);

    this.applied_filter = this.memo.getType(ChipCloudChip).get({ is_selected: true });

    // Removes the filter chipbar from the actions list
    if (
      this.page.on_response_received_actions &&
      this.page.on_response_received_actions.length > 1
    ) {
      this.page.on_response_received_actions.shift();
    }

    this.contents = this.page.on_response_received_actions?.first();
  }

  /**
   * Applies given filter to the list.
   * @param filter - The filter to apply
   */
  async applyFilter(filter: string | ChipCloudChip): Promise<FilteredChannelList> {
    const feed = await super.getFilteredFeed(filter);
    return new FilteredChannelList(this.actions, feed.page, true);
  }

  /**
   * Retrieves list continuation.
   */
  async getContinuation(): Promise<FilteredChannelList> {
    const page = await super.getContinuationData();

    if (!page?.on_response_received_actions_memo)
      throw new InnertubeError('Unexpected continuation data', page);

    // Keep the filters
    page.on_response_received_actions_memo.set('FeedFilterChipBar', this.memo.getType(FeedFilterChipBar));
    page.on_response_received_actions_memo.set('ChipCloudChip', this.memo.getType(ChipCloudChip));

    return new FilteredChannelList(this.actions, page, true);
  }
}