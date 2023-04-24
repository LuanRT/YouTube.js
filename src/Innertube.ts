import Session, { SessionOptions } from './core/Session.js';

import NavigationEndpoint from './parser/classes/NavigationEndpoint.js';
import Channel from './parser/youtube/Channel.js';
import Comments from './parser/youtube/Comments.js';
import HashtagFeed from './parser/youtube/HashtagFeed.js';
import History from './parser/youtube/History.js';
import Library from './parser/youtube/Library.js';
import NotificationsMenu from './parser/youtube/NotificationsMenu.js';
import Playlist from './parser/youtube/Playlist.js';
import Search from './parser/youtube/Search.js';
import VideoInfo from './parser/youtube/VideoInfo.js';

import AccountManager from './core/AccountManager.js';
import Feed from './core/Feed.js';
import InteractionManager from './core/InteractionManager.js';
import YTKids from './core/Kids.js';
import YTMusic from './core/Music.js';
import PlaylistManager from './core/PlaylistManager.js';
import YTStudio from './core/Studio.js';
import TabbedFeed from './core/TabbedFeed.js';
import Guide from './parser/youtube/Guide.js';
import HomeFeed from './parser/youtube/HomeFeed.js';
import Proto from './proto/index.js';
import Constants from './utils/Constants.js';

import type Actions from './core/Actions.js';
import type Format from './parser/classes/misc/Format.js';

import type { ApiResponse } from './core/Actions.js';
import type { IBrowseResponse, IParsedResponse } from './parser/types/index.js';
import type { DownloadOptions, FormatOptions } from './utils/FormatUtils.js';
import { InnertubeError, generateRandomString, throwIfMissing } from './utils/Utils.js';
import { type INextEndpoint, NextEndpoint, PlayerEndpoint } from './core/endpoints/index.js';

export type InnertubeConfig = SessionOptions;

export interface SearchFilters {
  upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
  type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
  duration?: 'all' | 'short' | 'medium' | 'long';
  sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
  features?: ('hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180')[];
}

export type InnerTubeClient = 'WEB' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED' | 'YTKIDS'

/**
 * Provides access to various services and modules in the YouTube API.
 */
export default class Innertube {
  #session: Session;

  constructor(session: Session) {
    this.#session = session;
  }

  static async create(config: InnertubeConfig = {}): Promise<Innertube> {
    return new Innertube(await Session.create(config));
  }

  /**
   * Retrieves video info.
   * @param target - The video id or `NavigationEndpoint`.
   * @param client - The client to use.
   */
  async getInfo(target: string | NavigationEndpoint, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ target });

    let next_payload: INextEndpoint;

    if (target instanceof NavigationEndpoint) {
      next_payload = NextEndpoint.build({
        video_id: target.payload?.videoId,
        playlist_id: target.payload?.playlistId,
        params: target.payload?.params,
        playlist_index: target.payload?.index
      });
    } else if (typeof target === 'string') {
      next_payload = NextEndpoint.build({
        video_id: target
      });
    } else {
      throw new InnertubeError('Invalid target, expected either a video id or a valid NavigationEndpoint', target);
    }

    if (!next_payload.videoId)
      throw new InnertubeError('Video id cannot be empty', next_payload);

    const player_payload = PlayerEndpoint.build({
      video_id: next_payload.videoId,
      playlist_id: next_payload?.playlistId,
      client: client,
      sts: this.#session.player?.sts
    });

    const player_response = this.actions.execute(PlayerEndpoint.PATH, player_payload);
    const next_response = this.actions.execute(NextEndpoint.PATH, next_payload);
    const response = await Promise.all([ player_response, next_response ]);

    const cpn = generateRandomString(16);

    return new VideoInfo(response, this.actions, cpn);
  }

  /**
   * Retrieves basic video info.
   * @param video_id - The video id.
   * @param client - The client to use.
   */
  async getBasicInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ video_id });

    const player_payload = PlayerEndpoint.build({
      video_id: video_id,
      client: client,
      sts: this.#session.player?.sts
    });

    const response = await this.actions.execute(PlayerEndpoint.PATH, player_payload);

    const cpn = generateRandomString(16);

    return new VideoInfo([ response ], this.actions, cpn);
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

    return new Search(this.actions, response);
  }

  /**
   * Retrieves search suggestions for a given query.
   * @param query - The search query.
   */
  async getSearchSuggestions(query: string): Promise<string[]> {
    throwIfMissing({ query });

    const url = new URL(`${Constants.URLS.YT_SUGGESTIONS}search`);
    url.searchParams.set('q', query);
    url.searchParams.set('hl', this.#session.context.client.hl);
    url.searchParams.set('gl', this.#session.context.client.gl);
    url.searchParams.set('ds', 'yt');
    url.searchParams.set('client', 'youtube');
    url.searchParams.set('xssi', 't');
    url.searchParams.set('oe', 'UTF');

    const response = await this.#session.http.fetch(url);
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

    const next_payload = NextEndpoint.build({ continuation: payload });
    const next_response = await this.actions.execute(NextEndpoint.PATH, next_payload);

    return new Comments(this.actions, next_response.data);
  }

  /**
   * Retrieves YouTube's home feed (aka recommendations).
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.actions.execute('/browse', { browseId: 'FEwhat_to_watch' });
    return new HomeFeed(this.actions, response);
  }

  /**
   * Retrieves YouTube's content guide.
   */
  async getGuide(): Promise<Guide> {
    const response = await this.actions.execute('/guide');
    return new Guide(response.data);
  }

  /**
   * Returns the account's library.
   */
  async getLibrary(): Promise<Library> {
    const response = await this.actions.execute('/browse', { browseId: 'FElibrary' });
    return new Library(this.actions, response);
  }

  /**
   * Retrieves watch history.
   * Which can also be achieved with {@link getLibrary}.
   */
  async getHistory(): Promise<History> {
    const response = await this.actions.execute('/browse', { browseId: 'FEhistory' });
    return new History(this.actions, response);
  }

  /**
   * Retrieves trending content.
   */
  async getTrending(): Promise<TabbedFeed<IBrowseResponse>> {
    const response = await this.actions.execute('/browse', { browseId: 'FEtrending', parse: true });
    return new TabbedFeed(this.actions, response);
  }

  /**
   * Retrieves subscriptions feed.
   */
  async getSubscriptionsFeed(): Promise<Feed<IBrowseResponse>> {
    const response = await this.actions.execute('/browse', { browseId: 'FEsubscriptions', parse: true });
    return new Feed(this.actions, response);
  }

  /**
   * Retrieves contents for a given channel.
   * @param id - Channel id
   */
  async getChannel(id: string): Promise<Channel> {
    throwIfMissing({ id });
    const response = await this.actions.execute('/browse', { browseId: id });
    return new Channel(this.actions, response);
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

    return new Playlist(this.actions, response);
  }

  /**
   * Retrieves a given hashtag's page.
   * @param hashtag - The hashtag to fetch.
   */
  async getHashtag(hashtag: string): Promise<HashtagFeed> {
    throwIfMissing({ hashtag });

    const params = Proto.encodeHashtag(hashtag);
    const response = await this.actions.execute('/browse', { browseId: 'FEhashtag', params });

    return new HashtagFeed(this.actions, response);
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
    return response.endpoint;
  }

  /**
   * Utility method to call an endpoint without having to use {@link Actions}.
   * @param endpoint -The endpoint to call.
   * @param args - Call arguments.
   */
  call<T extends IParsedResponse>(endpoint: NavigationEndpoint, args: { [key: string]: any; parse: true }): Promise<T>;
  call(endpoint: NavigationEndpoint, args?: { [key: string]: any; parse?: false }): Promise<ApiResponse>;
  call(endpoint: NavigationEndpoint, args?: object): Promise<IParsedResponse | ApiResponse> {
    return endpoint.call(this.actions, args);
  }

  /**
   * An instance of YTMusic for interacting with the YouTube Music service.
   */
  get music(): YTMusic {
    return new YTMusic(this.#session);
  }

  /**
   * An instance of YTStudio for interacting with the YouTube Studio service.
   */
  get studio(): YTStudio {
    return new YTStudio(this.#session);
  }

  /**
   * An instance of YTKids for interacting with the YouTube Kids service.
   */
  get kids(): YTKids {
    return new YTKids(this.#session);
  }

  /**
   * An instance of AccountManager for managing a user's account.
   */
  get account(): AccountManager {
    return new AccountManager(this.#session.actions);
  }

  /**
   * An instance of PlaylistManager for managing playlists.
   */
  get playlist(): PlaylistManager {
    return new PlaylistManager(this.#session.actions);
  }

  /**
   * An instance of InteractionManager for interacting with contents in YouTube.
   */
  get interact(): InteractionManager {
    return new InteractionManager(this.#session.actions);
  }

  /**
   * An instance of Actions.
   */
  get actions(): Actions {
    return this.#session.actions;
  }

  /**
   * Returns the InnerTube session instance.
   */
  get session(): Session {
    return this.#session;
  }
}