
import Session, { SessionOptions } from './core/Session';
import type { ParsedResponse } from './parser';
import type { ActionsResponse } from './core/Actions';

import NavigationEndpoint from './parser/classes/NavigationEndpoint';
import Channel from './parser/youtube/Channel';
import Comments from './parser/youtube/Comments';
import History from './parser/youtube/History';
import Library from './parser/youtube/Library';
import NotificationsMenu from './parser/youtube/NotificationsMenu';
import Playlist from './parser/youtube/Playlist';
import Search from './parser/youtube/Search';
import VideoInfo, { DownloadOptions, FormatOptions } from './parser/youtube/VideoInfo';

import AccountManager from './core/AccountManager';
import Feed from './core/Feed';
import InteractionManager from './core/InteractionManager';
import YTMusic from './core/Music';
import PlaylistManager from './core/PlaylistManager';
import Studio from './core/Studio';
import TabbedFeed from './core/TabbedFeed';
import HomeFeed from './parser/youtube/HomeFeed';
import Proto from './proto/index';
import Constants from './utils/Constants';

import type Actions from './core/Actions';
import type Format from './parser/classes/misc/Format';

import { generateRandomString, throwIfMissing } from './utils/Utils';

export type InnertubeConfig = SessionOptions;

export interface SearchFilters {
  upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year',
  type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie',
  duration?: 'all' | 'short' | 'medium' | 'long',
  sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count'
}

export type InnerTubeClient = 'WEB' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED';

class Innertube {
  session: Session;
  account: AccountManager;
  playlist: PlaylistManager;
  interact: InteractionManager;
  music: YTMusic;
  studio: Studio;
  actions: Actions;

  constructor(session: Session) {
    this.session = session;
    this.account = new AccountManager(this.session.actions);
    this.playlist = new PlaylistManager(this.session.actions);
    this.interact = new InteractionManager(this.session.actions);
    this.music = new YTMusic(this.session);
    this.studio = new Studio(this.session);
    this.actions = this.session.actions;
  }

  static async create(config: InnertubeConfig = {}): Promise<Innertube> {
    return new Innertube(await Session.create(config));
  }

  /**
   * Retrieves video info.
   * @param video_id - The video id.
   * @param client - The client to use.
   */
  async getInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ video_id });

    const cpn = generateRandomString(16);

    const initial_info = this.actions.getVideoInfo(video_id, cpn, client);
    const continuation = this.actions.execute('/next', { videoId: video_id });

    const response = await Promise.all([ initial_info, continuation ]);
    return new VideoInfo(response, this.actions, this.session.player, cpn);
  }

  /**
   * Retrieves basic video info.
   * @param video_id - The video id.
   * @param client - The client to use.
   */
  async getBasicInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ video_id });

    const cpn = generateRandomString(16);
    const response = await this.actions.getVideoInfo(video_id, cpn, client);

    return new VideoInfo([ response ], this.actions, this.session.player, cpn);
  }

  /**
   * Searches a given query.
   * @param query - The search query.
   * @param filters - Search filters.
   */
  async search(query: string, filters: SearchFilters = {}): Promise<Search> {
    throwIfMissing({ query });

    const args = {
      query,
      ...{
        params: filters ? Proto.encodeSearchFilters(filters) : undefined
      }
    };

    const response = await this.actions.execute('/search', args);

    return new Search(this.actions, response.data);
  }

  /**
   * Retrieves search suggestions for a given query.
   * @param query - The search query.
   */
  async getSearchSuggestions(query: string): Promise<string[]> {
    throwIfMissing({ query });

    const url = new URL(`${Constants.URLS.YT_SUGGESTIONS}search`);
    url.searchParams.set('q', query);
    url.searchParams.set('hl', this.session.context.client.hl);
    url.searchParams.set('gl', this.session.context.client.gl);
    url.searchParams.set('ds', 'yt');
    url.searchParams.set('client', 'youtube');
    url.searchParams.set('xssi', 't');
    url.searchParams.set('oe', 'UTF');

    const response = await this.session.http.fetch(url);
    const response_data = await response.text();

    const data = JSON.parse(response_data.replace(')]}\'', ''));
    const suggestions = data[1].map((suggestion: any) => suggestion[0]);

    return suggestions;
  }

  /**
   * Retrieves comments for a video.
   * @param video_id - The video id.
   * @param sort_by - Sorting options.
   */
  async getComments(video_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<Comments> {
    throwIfMissing({ video_id });

    const payload = Proto.encodeCommentsSectionParams(video_id, {
      sort_by: sort_by || 'TOP_COMMENTS'
    });

    const response = await this.actions.execute('/next', { continuation: payload });

    return new Comments(this.actions, response.data);
  }

  /**
   * Retrieves YouTube's home feed (aka recommendations).
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.actions.execute('/browse', { browseId: 'FEwhat_to_watch' });
    return new HomeFeed(this.actions, response.data);
  }

  /**
   * Returns the account's library.
   */
  async getLibrary(): Promise<Library> {
    const response = await this.actions.execute('/browse', { browseId: 'FElibrary' });
    return new Library(response.data, this.actions);
  }

  /**
   * Retrieves watch history.
   * Which can also be achieved with {@link getLibrary}.
   */
  async getHistory(): Promise<History> {
    const response = await this.actions.execute('/browse', { browseId: 'FEhistory' });
    return new History(this.actions, response.data);
  }

  /**
   * Retrieves trending content.
   */
  async getTrending(): Promise<TabbedFeed> {
    const response = await this.actions.execute('/browse', { browseId: 'FEtrending' });
    return new TabbedFeed(this.actions, response.data);
  }

  /**
   * Retrieves subscriptions feed.
   */
  async getSubscriptionsFeed(): Promise<Feed> {
    const response = await this.actions.execute('/browse', { browseId: 'FEsubscriptions' });
    return new Feed(this.actions, response.data);
  }

  /**
   * Retrieves contents for a given channel.
   * @param id - Channel id
   */
  async getChannel(id: string): Promise<Channel> {
    throwIfMissing({ id });
    const response = await this.actions.execute('/browse', { browseId: id });
    return new Channel(this.actions, response.data);
  }

  /**
   * Retrieves notifications.
   */
  async getNotifications(): Promise<NotificationsMenu> {
    const response = await this.actions.execute('/notification/get_notification_menu', { notificationsMenuRequestType: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX' });
    return new NotificationsMenu(this.actions, response);
  }

  /**
   * Retrieves unseen notifications count.
   */
  async getUnseenNotificationsCount(): Promise<number> {
    const response = await this.actions.execute('/notification/get_unseen_count');
    // TODO: properly parse this
    return response.data?.unseenCount || response.data?.actions?.[0].updateNotificationsUnseenCountAction?.unseenCount || 0;
  }

  /**
   * Retrieves playlist contents.
   * @param id - Playlist id
   */
  async getPlaylist(id: string): Promise<Playlist> {
    throwIfMissing({ id });

    if (!id.startsWith('VL')) {
      id = `VL${id}`;
    }

    const response = await this.actions.execute('/browse', { browseId: id });
    return new Playlist(this.actions, response.data);
  }

  /**
   * An alternative to {@link download}.
   * Returns deciphered streaming data.
   *
   * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
   * @param video_id - The video id.
   * @param options - Format options.
   */
  async getStreamingData(video_id: string, options: FormatOptions = {}): Promise<Format> {
    const info = await this.getBasicInfo(video_id);
    return info.chooseFormat(options);
  }

  /**
   * Downloads a given video. If you only need the direct download link see {@link getStreamingData}.
   * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
   * @param video_id - The video id.
   * @param options - Download options.
   */
  async download(video_id: string, options?: DownloadOptions): Promise<ReadableStream<Uint8Array>> {
    const info = await this.getBasicInfo(video_id, options?.client);
    return info.download(options);
  }

  /**
   * Resolves the given URL.
   * @param url - The URL.
   */
  async resolveURL(url: string): Promise<NavigationEndpoint> {
    const response = await this.actions.execute('/navigation/resolve_url', { url, parse: true });
    return response.endpoint as NavigationEndpoint;
  }

  /**
   * Utility method to call an endpoint without having to use {@link Actions}.
   * @param endpoint -The endpoint to call.
   * @param args - Call arguments.
   */
  call(endpoint: NavigationEndpoint, args: { [key: string]: any; parse: true }): Promise<ParsedResponse>;
  call(endpoint: NavigationEndpoint, args?: { [key: string]: any; parse?: false }): Promise<ActionsResponse>;
  call(endpoint: NavigationEndpoint, args?: object): Promise<ActionsResponse | ParsedResponse> {
    return endpoint.call(this.actions, args);
  }
}

export default Innertube;
