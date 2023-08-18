import type { SessionOptions } from './core/Session.js';
import Session from './core/Session.js';

import NavigationEndpoint from './parser/classes/NavigationEndpoint.js';
import type Format from './parser/classes/misc/Format.js';
import Channel from './parser/youtube/Channel.js';
import Comments from './parser/youtube/Comments.js';
import Guide from './parser/youtube/Guide.js';
import HashtagFeed from './parser/youtube/HashtagFeed.js';
import History from './parser/youtube/History.js';
import HomeFeed from './parser/youtube/HomeFeed.js';
import Library from './parser/youtube/Library.js';
import NotificationsMenu from './parser/youtube/NotificationsMenu.js';
import Playlist from './parser/youtube/Playlist.js';
import Search from './parser/youtube/Search.js';
import VideoInfo from './parser/youtube/VideoInfo.js';

import { Kids, Music, Studio } from './core/clients/index.js';
import { AccountManager, InteractionManager, PlaylistManager } from './core/managers/index.js';
import { Feed, TabbedFeed } from './core/mixins/index.js';

import * as Proto from './proto/index.js';
import * as Constants from './utils/Constants.js';
import { InnertubeError, generateRandomString, throwIfMissing } from './utils/Utils.js';

import {
  BrowseEndpoint,
  GetNotificationMenuEndpoint,
  GuideEndpoint,
  NextEndpoint,
  PlayerEndpoint,
  ResolveURLEndpoint,
  SearchEndpoint
} from './core/endpoints/index.js';

import { GetUnseenCountEndpoint } from './core/endpoints/notification/index.js';

import type { ApiResponse } from './core/Actions.js';
import type { IBrowseResponse, IParsedResponse } from './parser/types/index.js';
import type { INextRequest } from './types/index.js';
import type { DownloadOptions, FormatOptions } from './types/FormatUtils.js';

export type InnertubeConfig = SessionOptions;

export type InnerTubeClient = 'WEB' | 'iOS' | 'ANDROID' | 'YTMUSIC_ANDROID' | 'YTMUSIC' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED' | 'YTKIDS';

export type SearchFilters = Partial<{
  upload_date: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
  type: 'all' | 'video' | 'channel' | 'playlist' | 'movie';
  duration: 'all' | 'short' | 'medium' | 'long';
  sort_by: 'relevance' | 'rating' | 'upload_date' | 'view_count';
  features: ('hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180')[];
}>;

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

    let next_payload: INextRequest;

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

    const response = await this.actions.execute(
      PlayerEndpoint.PATH, PlayerEndpoint.build({
        video_id: video_id,
        client: client,
        sts: this.#session.player?.sts
      })
    );

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

    const response = await this.actions.execute(
      SearchEndpoint.PATH, SearchEndpoint.build({
        query, params: filters ? Proto.encodeSearchFilters(filters) : undefined
      })
    );

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

    const response = await this.actions.execute(
      NextEndpoint.PATH, NextEndpoint.build({
        continuation: Proto.encodeCommentsSectionParams(video_id, {
          sort_by: sort_by || 'TOP_COMMENTS'
        })
      })
    );

    return new Comments(this.actions, response.data);
  }

  /**
   * Retrieves YouTube's home feed (aka recommendations).
   */
  async getHomeFeed(): Promise<HomeFeed> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FEwhat_to_watch' })
    );
    return new HomeFeed(this.actions, response);
  }

  /**
   * Retrieves YouTube's content guide.
   */
  async getGuide(): Promise<Guide> {
    const response = await this.actions.execute(GuideEndpoint.PATH);
    return new Guide(response.data);
  }

  /**
   * Returns the account's library.
   */
  async getLibrary(): Promise<Library> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FElibrary' })
    );
    return new Library(this.actions, response);
  }

  /**
   * Retrieves watch history.
   * Which can also be achieved with {@link getLibrary}.
   */
  async getHistory(): Promise<History> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FEhistory' })
    );
    return new History(this.actions, response);
  }

  /**
   * Retrieves trending content.
   */
  async getTrending(): Promise<TabbedFeed<IBrowseResponse>> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, { ...BrowseEndpoint.build({ browse_id: 'FEtrending' }), parse: true }
    );
    return new TabbedFeed(this.actions, response);
  }

  /**
   * Retrieves subscriptions feed.
   */
  async getSubscriptionsFeed(): Promise<Feed<IBrowseResponse>> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, { ...BrowseEndpoint.build({ browse_id: 'FEsubscriptions' }), parse: true }
    );
    return new Feed(this.actions, response);
  }

  /**
   * Retrieves contents for a given channel.
   * @param id - Channel id
   */
  async getChannel(id: string): Promise<Channel> {
    throwIfMissing({ id });
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: id })
    );
    return new Channel(this.actions, response);
  }

  /**
   * Retrieves notifications.
   */
  async getNotifications(): Promise<NotificationsMenu> {
    const response = await this.actions.execute(
      GetNotificationMenuEndpoint.PATH, GetNotificationMenuEndpoint.build({
        notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX'
      })
    );
    return new NotificationsMenu(this.actions, response);
  }

  /**
   * Retrieves unseen notifications count.
   */
  async getUnseenNotificationsCount(): Promise<number> {
    const response = await this.actions.execute(GetUnseenCountEndpoint.PATH);
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

    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: id })
    );

    return new Playlist(this.actions, response);
  }

  /**
   * Retrieves a given hashtag's page.
   * @param hashtag - The hashtag to fetch.
   */
  async getHashtag(hashtag: string): Promise<HashtagFeed> {
    throwIfMissing({ hashtag });

    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'FEhashtag',
        params: Proto.encodeHashtag(hashtag)
      })
    );

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
    const response = await this.actions.execute(
      ResolveURLEndpoint.PATH, { ...ResolveURLEndpoint.build({ url }), parse: true }
    );
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
   * An interface for interacting with YouTube Music.
   */
  get music() {
    return new Music(this.#session);
  }

  /**
   * An interface for interacting with YouTube Studio.
   */
  get studio() {
    return new Studio(this.#session);
  }

  /**
   * An interface for interacting with YouTube Kids.
   */
  get kids() {
    return new Kids(this.#session);
  }

  /**
   * An interface for managing and retrieving account information.
   */
  get account() {
    return new AccountManager(this.#session.actions);
  }

  /**
   * An interface for managing playlists.
   */
  get playlist() {
    return new PlaylistManager(this.#session.actions);
  }

  /**
   * An interface for directly interacting with certain YouTube features.
   */
  get interact() {
    return new InteractionManager(this.#session.actions);
  }

  /**
   * An internal class used to dispatch requests.
   */
  get actions() {
    return this.#session.actions;
  }

  /**
   * The session used by this instance.
   */
  get session() {
    return this.#session;
  }
}