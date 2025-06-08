import Session from './core/Session.js';
import { Kids, Music, Studio } from './core/clients/index.js';
import { AccountManager, InteractionManager, PlaylistManager } from './core/managers/index.js';
import { Feed, TabbedFeed } from './core/mixins/index.js';

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
import { generateRandomString, InnertubeError, throwIfMissing, u8ToBase64 } from './utils/Utils.js';

import type { ApiResponse } from './core/Actions.js';
import type {
  DownloadOptions,
  EngagementType,
  FormatOptions,
  InnerTubeClient,
  InnerTubeConfig,
  SearchFilters
} from './types/index.js';
import type { IBrowseResponse, IParsedResponse } from './parser/index.js';
import type Format from './parser/classes/misc/Format.js';

import {
  CommunityPostCommentsParam,
  CommunityPostCommentsParamContainer,
  CommunityPostParams,
  GetCommentsSectionParams,
  Hashtag,
  ReelSequence,
  SearchFilter,
  SearchFilter_Filters_Duration,
  SearchFilter_Filters_SearchType,
  SearchFilter_Filters_UploadDate,
  SearchFilter_SortBy
} from '../protos/generated/misc/params.js';

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
  readonly #session: Session;

  constructor(session: Session) {
    this.#session = session;
  }

  static async create(config: InnerTubeConfig = {}): Promise<Innertube> {
    return new Innertube(await Session.create(config));
  }

  async getInfo(target: string | NavigationEndpoint, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ target });

    const payload = {
      videoId: target instanceof NavigationEndpoint ? target.payload?.videoId : target,
      playlistId: target instanceof NavigationEndpoint ? target.payload?.playlistId : undefined,
      playlistIndex: target instanceof NavigationEndpoint ? target.payload?.playlistIndex : undefined,
      params: target instanceof NavigationEndpoint ? target.payload?.params : undefined,
      racyCheckOk: true,
      contentCheckOk: true
    };

    const watch_endpoint = new NavigationEndpoint({ watchEndpoint: payload });
    const watch_next_endpoint = new NavigationEndpoint({ watchNextEndpoint: payload });

    const session = this.#session;

    const extra_payload: Record<string, any> = {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          lactMilliseconds: '-1',
          signatureTimestamp: session.player?.sts
        }
      },
      client
    };

    if (session.po_token) {
      extra_payload.serviceIntegrityDimensions = {
        poToken: session.po_token
      };
    }

    const watch_response = watch_endpoint.call(session.actions, extra_payload);
    const watch_next_response = watch_next_endpoint.call(session.actions);

    const response = await Promise.all([ watch_response, watch_next_response ]);

    const cpn = generateRandomString(16);

    return new VideoInfo(response, session.actions, cpn);
  }

  async getBasicInfo(video_id: string, client?: InnerTubeClient): Promise<VideoInfo> {
    throwIfMissing({ video_id });

    const watch_endpoint = new NavigationEndpoint({
      watchEndpoint: {
        videoId: video_id,
        racyCheckOk: true,
        contentCheckOk: true
      }
    });

    const session = this.#session;

    const extra_payload: Record<string, any> = {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          lactMilliseconds: '-1',
          signatureTimestamp: session.player?.sts
        }
      },
      client
    };

    if (session.po_token) {
      extra_payload.serviceIntegrityDimensions = {
        poToken: session.po_token
      };
    }
    
    const watch_response = await watch_endpoint.call(session.actions, extra_payload);

    const cpn = generateRandomString(16);

    return new VideoInfo([ watch_response ], session.actions, cpn);
  }

  async getShortsVideoInfo(video_id: string, client?: InnerTubeClient): Promise<ShortFormVideoInfo> {
    throwIfMissing({ video_id });

    const reel_watch_endpoint = new NavigationEndpoint({
      reelWatchEndpoint: {
        disablePlayerResponse: false,
        params: 'CAUwAg%3D%3D',
        videoId: video_id
      }
    });

    const actions = this.#session.actions;

    const reel_watch_response = reel_watch_endpoint.call(actions, { client });

    const writer = ReelSequence.encode({
      shortId: video_id,
      params: {
        number: 5
      },
      feature2: 25,
      feature3: 0
    });

    const params = encodeURIComponent(u8ToBase64(writer.finish()));

    const sequence_response = actions.execute('/reel/reel_watch_sequence', { sequenceParams: params });

    const response = await Promise.all([ reel_watch_response, sequence_response ]);

    const cpn = generateRandomString(16);

    return new ShortFormVideoInfo([ response[0] ], actions, cpn, response[1]);
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

    const search_endpoint = new NavigationEndpoint({
      searchEndpoint: {
        query,
        params: filters ? encodeURIComponent(u8ToBase64(SearchFilter.encode(search_filter).finish())) : undefined
      }
    });
    const response = await search_endpoint.call(this.#session.actions);

    return new Search(this.actions, response);
  }

  async getSearchSuggestions(query: string, previous_query?: string): Promise<string[]> {
    const session = this.#session;

    const url = new URL(`${Constants.URLS.YT_SUGGESTIONS}/complete/search`);
    url.searchParams.set('client', 'youtube');
    url.searchParams.set('gs_ri', 'youtube');
    url.searchParams.set('gs_id', '0');
    url.searchParams.set('cp', '0');
    url.searchParams.set('ds', 'yt');
    url.searchParams.set('sugexp', Constants.CLIENTS.WEB.SUGG_EXP_ID);
    url.searchParams.set('hl', session.context.client.hl);
    url.searchParams.set('gl', session.context.client.gl);
    url.searchParams.set('q', query);

    if (previous_query)
      url.searchParams.set('pq', previous_query);

    const response = await session.http.fetch_function(url, {
      headers: {
        'Cookie': session.cookie || ''
      }
    });
    
    const text = await response.text();

    const data = JSON.parse(text.replace('window.google.ac.h(', '').slice(0, -1));
    return data[1].map((suggestion: (string | number)[]) => suggestion[0]);
  }

  async getComments(video_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST', comment_id?: string): Promise<Comments> {
    throwIfMissing({ video_id });

    const SORT_OPTIONS = {
      TOP_COMMENTS: 0,
      NEWEST_FIRST: 1
    };

    const token = GetCommentsSectionParams.encode({
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

    const continuation = encodeURIComponent(u8ToBase64(token.finish()));

    const continuation_command = new NavigationEndpoint({
      continuationCommand: {
        request: 'CONTINUATION_REQUEST_TYPE_WATCH_NEXT',
        token: continuation
      }
    });

    const response = await continuation_command.call(this.#session.actions);

    return new Comments(this.actions, response.data);
  }

  async getHomeFeed(): Promise<HomeFeed> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEwhat_to_watch' } });
    const response = await browse_endpoint.call(this.#session.actions);
    return new HomeFeed(this.actions, response);
  }

  async getGuide(): Promise<Guide> {
    const response = await this.actions.execute('/guide');
    return new Guide(response.data);
  }

  async getLibrary(): Promise<Library> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FElibrary' } });
    const response = await browse_endpoint.call(this.#session.actions);
    return new Library(this.actions, response);
  }

  async getHistory(): Promise<History> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEhistory' } });
    const response = await browse_endpoint.call(this.#session.actions);
    return new History(this.actions, response);
  }

  async getTrending(): Promise<TabbedFeed<IBrowseResponse>> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEtrending' } });
    const response = await browse_endpoint.call(this.#session.actions);
    return new TabbedFeed(this.actions, response);
  }

  async getCourses(): Promise<Feed<IBrowseResponse>> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEcourses_destination' } });
    const response = await browse_endpoint.call(this.#session.actions, { parse: true });
    return new Feed(this.actions, response);
  }

  async getSubscriptionsFeed(): Promise<Feed<IBrowseResponse>> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEsubscriptions' } });
    const response = await browse_endpoint.call(this.#session.actions, { parse: true });
    return new Feed(this.actions, response);
  }

  async getChannelsFeed(): Promise<Feed<IBrowseResponse>> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEchannels' } });
    const response = await browse_endpoint.call(this.#session.actions, { parse: true });
    return new Feed(this.actions, response);
  }

  async getChannel(id: string): Promise<Channel> {
    throwIfMissing({ id });
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: id } });
    const response = await browse_endpoint.call(this.#session.actions);
    return new Channel(this.actions, response);
  }

  async getNotifications(): Promise<NotificationsMenu> {
    const response = await this.actions.execute('/notification/get_notification_menu', { notificationsMenuRequestType: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX' });
    return new NotificationsMenu(this.actions, response);
  }

  async getUnseenNotificationsCount(): Promise<number> {
    const response = await this.actions.execute('/notification/get_unseen_count');
    // FIXME: properly parse this.
    return response.data?.unseenCount || response.data?.actions?.[0].updateNotificationsUnseenCountAction?.unseenCount || 0;
  }

  /**
   * Retrieves the user's playlists.
   */
  async getPlaylists(): Promise<Feed<IBrowseResponse>> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEplaylist_aggregation' } });
    const response = await browse_endpoint.call(this.#session.actions, { parse: true });
    return new Feed(this.actions, response);
  }

  async getPlaylist(id: string): Promise<Playlist> {
    throwIfMissing({ id });

    if (!id.startsWith('VL')) {
      id = `VL${id}`;
    }

    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: id } });
    const response = await browse_endpoint.call(this.#session.actions);

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

    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEhashtag', params } });
    const response = await browse_endpoint.call(this.#session.actions);

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
    const info = await this.getBasicInfo(video_id, options?.client);

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
    const response = await this.actions.execute('/navigation/resolve_url', { url, parse: true });

    if (!response.endpoint)
      throw new InnertubeError('Failed to resolve URL. Expected a NavigationEndpoint but got undefined', response);

    return response.endpoint;
  }

  /**
   * Gets a post page given a post id and the channel id
   */
  async getPost(post_id: string, channel_id: string) : Promise<Feed<IBrowseResponse>> {
    throwIfMissing({ post_id, channel_id });
    const writer = CommunityPostParams.encode({
      f0: 'community',
      f1: {
        postId: post_id
      },
      f2: {
        p1: 1,
        p2: 1 
      }
    });

    const params = encodeURIComponent(u8ToBase64(writer.finish()).replace(/\+/g, '-').replace(/\//g, '_'));

    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: channel_id, params: params } });

    const response = await browse_endpoint.call(this.#session.actions, { parse: true });
    return new Feed(this.actions, response);
  }

  /**
   * Gets the comments of a post.
   */
  async getPostComments(post_id: string, channel_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST'): Promise<Comments> {
    throwIfMissing({ post_id, channel_id });

    const SORT_OPTIONS = {
      TOP_COMMENTS: 0,
      NEWEST_FIRST: 1
    };

    const writer1 = CommunityPostCommentsParam.encode({
      title: 'community',
      postContainer: {
        postId: post_id
      },
      f0: {
        f0: 1,
        f1: 1
      },
      commentDataContainer: {
        title: 'comments-section',
        commentData: {
          sortBy: SORT_OPTIONS[sort_by || 'TOP_COMMENTS'],
          f0: 1,
          channelId: channel_id,
          postId: post_id
        }
      }
    });

    const writer2 = CommunityPostCommentsParamContainer.encode({
      f0: {
        location: 'FEcomment_post_detail_page_web_top_level',
        protoData: encodeURIComponent(u8ToBase64(writer1.finish()).replace(/\+/g, '-').replace(/\//g, '_'))
      }
    });

    const continuation = encodeURIComponent(u8ToBase64(writer2.finish()));

    const continuation_command = new NavigationEndpoint({
      continuationCommand: {
        request: 'CONTINUATION_REQUEST_TYPE_BROWSE',
        token: continuation
      }
    });

    const response = await continuation_command.call(this.#session.actions);

    return new Comments(this.actions, response.data);
  }

  /**
   * Fetches an attestation challenge.
   */
  async getAttestationChallenge(engagement_type: EngagementType, ids?: Record<string, any>[]) {
    const payload: Record<string, any> = {
      engagementType: engagement_type
    };
    
    if (ids)
      payload.ids = ids;
    
    return this.actions.execute('/att/get', { parse: true, ...payload });
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
