import Session from './core/Session.js';
import { Kids, Music, Studio } from './core/clients/index.js';
import { AccountManager, InteractionManager, PlaylistManager } from './core/managers/index.js';
import { Feed, TabbedFeed } from './core/mixins/index.js';

import {
  BrowseEndpoint,
  GetNotificationMenuEndpoint,
  GuideEndpoint,
  NextEndpoint,
  PlayerEndpoint,
  ResolveURLEndpoint,
  SearchEndpoint,
  Reel,
  Notification
} from './core/endpoints/index.js';

import {
  Channel,
  Comments,
  Guide,
  HashtagFeed,
  History,
  HomeFeed,
  Library,
  NotificationsMenu,
  Playlist,
  Search,
  VideoInfo
} from './parser/youtube/index.js';

import { ShortFormVideoInfo } from './parser/ytshorts/index.js';

import NavigationEndpoint from './parser/classes/NavigationEndpoint.js';

import * as Constants from './utils/Constants.js';
import { InnertubeError, generateRandomString, throwIfMissing, u8ToBase64 } from './utils/Utils.js';

import type { ApiResponse } from './core/Actions.js';
import type { InnerTubeConfig, InnerTubeClient, SearchFilters, INextRequest } from './types/index.js';
import type { IBrowseResponse, IParsedResponse } from './parser/types/index.js';
import type { DownloadOptions, FormatOptions } from './types/FormatUtils.js';
import type Format from './parser/classes/misc/Format.js';

import {
  SearchFilter_SortBy,
  SearchFilter_Filters_UploadDate,
  SearchFilter_Filters_SearchType,
  SearchFilter_Filters_Duration
} from '../protos/generated/misc/params.js';
import { Hashtag, SearchFilter, ReelSequence, GetCommentsSectionParams } from '../protos/generated/misc/params.js';

/**
 * Provides access to various services and modules in the YouTube API.
 * 
 * @example
 * ```ts
 * import { Innertube, UniversalCache } from 'youtubei.js';
 * const innertube = await Innertube.create({ cache: new UniversalCache(true)});
 * ```
 */
export default class Innertube {
  #session: Session;

  constructor(session: Session) {
    this.#session = session;
  }

  static async create(config: InnerTubeConfig = {}): Promise<Innertube> {
    return new Innertube(await Session.create(config));
  }

  async getInfo(target: string | NavigationEndpoint, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ target: target });

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
      throw new InnertubeError('Invalid target. Expected a video id or NavigationEndpoint.', target);
    }

    if (!next_payload.videoId)
      throw new InnertubeError('Video id cannot be empty', next_payload);

    const player_payload = PlayerEndpoint.build({
      video_id: next_payload.videoId,
      playlist_id: next_payload?.playlistId,
      client: client,
      sts: this.#session.player?.sts,
      po_token: this.#session.po_token
    });

    const player_response = this.actions.execute(PlayerEndpoint.PATH, player_payload);
    const next_response = this.actions.execute(NextEndpoint.PATH, next_payload);
    const response = await Promise.all([ player_response, next_response ]);

    const cpn = generateRandomString(16);

    return new VideoInfo(response, this.actions, cpn);
  }

  async getBasicInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ video_id });

    const response = await this.actions.execute(
      PlayerEndpoint.PATH, PlayerEndpoint.build({
        video_id: video_id,
        client: client,
        sts: this.#session.player?.sts,
        po_token: this.#session.po_token
      })
    );

    const cpn = generateRandomString(16);

    return new VideoInfo([ response ], this.actions, cpn);
  }

  async getShortsVideoInfo(video_id: string, client?: InnerTubeClient): Promise<ShortFormVideoInfo> {
    throwIfMissing({ video_id });

    const watch_response = this.actions.execute(
      Reel.ReelItemWatchEndpoint.PATH, Reel.ReelItemWatchEndpoint.build({ video_id, client })
    );

    const writer = ReelSequence.encode({
      shortId: video_id,
      params: {
        number: 5
      },
      feature2: 25,
      feature3: 0
    });

    const params = encodeURIComponent(u8ToBase64(writer.finish()));

    const sequence_response = this.actions.execute(
      Reel.ReelWatchSequenceEndpoint.PATH, Reel.ReelWatchSequenceEndpoint.build({
        sequence_params: params
      })
    );

    const response = await Promise.all([ watch_response, sequence_response ]);

    const cpn = generateRandomString(16);

    return new ShortFormVideoInfo([ response[0] ], this.actions, cpn, response[1]);
  }

  async search(query: string, filters: SearchFilters = {}): Promise<Search> {
    throwIfMissing({ query });

    const search_filter: SearchFilter = {};

    search_filter.filters = {};

    if (filters.sort_by) {
      search_filter.sortBy = SearchFilter_SortBy[filters.sort_by.toUpperCase() as keyof typeof SearchFilter_SortBy];
    }

    if (filters.upload_date) {
      search_filter.filters.uploadDate = SearchFilter_Filters_UploadDate[filters.upload_date.toUpperCase() as keyof typeof SearchFilter_Filters_UploadDate];
    }

    if (filters.type) {
      search_filter.filters.type = SearchFilter_Filters_SearchType[filters.type.toUpperCase() as keyof typeof SearchFilter_Filters_SearchType];
    }

    if (filters.duration) {
      search_filter.filters.duration = SearchFilter_Filters_Duration[filters.duration.toUpperCase() as keyof typeof SearchFilter_Filters_Duration];
    }

    if (filters.features) {
      for (const feature of filters.features) {
        switch (feature) {
          case '360':
            search_filter.filters.features360 = true;
            break;
          case '3d':
            search_filter.filters.features3d = true;
            break;
          case '4k':
            search_filter.filters.features4k = true;
            break;
          case 'creative_commons':
            search_filter.filters.featuresCreativeCommons = true;
            break;
          case 'hd':
            search_filter.filters.featuresHd = true;
            break;
          case 'hdr':
            search_filter.filters.featuresHdr = true;
            break;
          case 'live':
            search_filter.filters.featuresLive = true;
            break;
          case 'location':
            search_filter.filters.featuresLocation = true;
            break;
          case 'purchased':
            search_filter.filters.featuresPurchased = true;
            break;
          case 'subtitles':
            search_filter.filters.featuresSubtitles = true;
            break;
          case 'vr180':
            search_filter.filters.featuresVr180 = true;
            break;
          default:
            break;
        }
      }
    }

    const response = await this.actions.execute(
      SearchEndpoint.PATH, SearchEndpoint.build({
        query, params: filters ? encodeURIComponent(u8ToBase64(SearchFilter.encode(search_filter).finish())) : undefined
      })
    );

    return new Search(this.actions, response);
  }

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

  async getComments(video_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST', comment_id?: string): Promise<Comments> {
    throwIfMissing({ video_id });

    const SORT_OPTIONS = {
      TOP_COMMENTS: 0,
      NEWEST_FIRST: 1
    };

    const writer = GetCommentsSectionParams.encode({
      ctx: {
        videoId: video_id
      },
      unkParam: 6,
      params: {
        opts: {
          videoId: video_id,
          sortBy: SORT_OPTIONS[sort_by || 'TOP_COMMENTS'],
          type: 2,
          commentId: comment_id || ''
        },
        target: 'comments-section'
      }
    });

    const continuation = encodeURIComponent(u8ToBase64(writer.finish()));

    const response = await this.actions.execute(NextEndpoint.PATH, NextEndpoint.build({ continuation }));

    return new Comments(this.actions, response.data);
  }

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

  async getLibrary(): Promise<Library> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FElibrary' })
    );
    return new Library(this.actions, response);
  }

  async getHistory(): Promise<History> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FEhistory' })
    );
    return new History(this.actions, response);
  }

  async getTrending(): Promise<TabbedFeed<IBrowseResponse>> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, { ...BrowseEndpoint.build({ browse_id: 'FEtrending' }), parse: true }
    );
    return new TabbedFeed(this.actions, response);
  }

  async getCourses(): Promise<Feed<IBrowseResponse>> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, { ...BrowseEndpoint.build({ browse_id: 'FEcourses_destination' }), parse: true }
    );
    return new Feed(this.actions, response);
  }

  async getSubscriptionsFeed(): Promise<Feed<IBrowseResponse>> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, { ...BrowseEndpoint.build({ browse_id: 'FEsubscriptions' }), parse: true }
    );
    return new Feed(this.actions, response);
  }

  async getChannelsFeed(): Promise<Feed<IBrowseResponse>> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, { ...BrowseEndpoint.build({ browse_id: 'FEchannels' }), parse: true }
    );
    return new Feed(this.actions, response);
  }

  async getChannel(id: string): Promise<Channel> {
    throwIfMissing({ id });
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: id })
    );
    return new Channel(this.actions, response);
  }

  async getNotifications(): Promise<NotificationsMenu> {
    const response = await this.actions.execute(
      GetNotificationMenuEndpoint.PATH, GetNotificationMenuEndpoint.build({
        notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX'
      })
    );
    return new NotificationsMenu(this.actions, response);
  }

  async getUnseenNotificationsCount(): Promise<number> {
    const response = await this.actions.execute(Notification.GetUnseenCountEndpoint.PATH);
    // FIXME: properly parse this.
    return response.data?.unseenCount || response.data?.actions?.[0].updateNotificationsUnseenCountAction?.unseenCount || 0;
  }

  /**
   * Retrieves the user's playlists.
   */
  async getPlaylists(): Promise<Feed<IBrowseResponse>> {
    const response = await this.actions.execute(
      BrowseEndpoint.PATH, { ...BrowseEndpoint.build({ browse_id: 'FEplaylist_aggregation' }), parse: true }
    );
    return new Feed(this.actions, response);
  }

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

  async getHashtag(hashtag: string): Promise<HashtagFeed> {
    throwIfMissing({ hashtag });

    const writer = Hashtag.encode({
      params: {
        hashtag,
        type: 1
      }
    });

    const params = encodeURIComponent(u8ToBase64(writer.finish()));

    const response = await this.actions.execute(
      BrowseEndpoint.PATH, BrowseEndpoint.build({
        browse_id: 'FEhashtag',
        params
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

    const format = info.chooseFormat(options);
    format.url = format.decipher(this.#session.player);

    return format;
  }

  /**
   * Downloads a given video. If all you need the direct download link, see {@link getStreamingData}.
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
   */
  async resolveURL(url: string): Promise<NavigationEndpoint> {
    const response = await this.actions.execute(
      ResolveURLEndpoint.PATH, { ...ResolveURLEndpoint.build({ url }), parse: true }
    );

    if (!response.endpoint)
      throw new InnertubeError('Failed to resolve URL. Expected a NavigationEndpoint but got undefined', response);

    return response.endpoint;
  }

  /**
   * Utility method to call an endpoint without having to use {@link Actions}.
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