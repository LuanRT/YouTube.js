'use strict';

import OAuth from './core/OAuth';
import Actions from './core/Actions';
import SessionBuilder from './core/SessionBuilder';
import AccountManager from './core/AccountManager';
import PlaylistManager from './core/PlaylistManager';
import InteractionManager from './core/InteractionManager';

import Search from './parser/youtube/Search';
import VideoInfo from './parser/youtube/VideoInfo';
import Channel from './parser/youtube/Channel';
import Playlist from './parser/youtube/Playlist';
import Library from './parser/youtube/Library';
import History from './parser/youtube/History';
import Comments from './parser/youtube/Comments';

import YTMusic from './core/Music';
import FilterableFeed from './core/FilterableFeed';
import TabbedFeed from './core/TabbedFeed'

import EventEmitter from 'events';
const { PassThrough } = BROWSER ? require('stream-browserify') : require('stream');

import Request from './utils/Request';

import {
  InnertubeError,
  throwIfMissing,
  generateRandomString
} from './utils/Utils';

import OldParser from './parser';
import Proto from './proto';
import type Player from './core/Player';

export interface InnertubeConfig {
  gl?: string;
  cookie?: string;
  debug?: boolean;
  proxy?: object;
  http_ent?: object;
  https_agent?: object;
}

export interface SignInCredientials {
  /**
   * Token used to sign in.
   */
  access_token?: string;
  /**
   * Token used to get a new access token.
   */
  refresh_token?: string;
  /**
   * Access token's expiration date, which is usually 24hrs-ish.
   */
  expires?: Date;
}

export interface SearchFilters {
  /**
   * filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
   */
  upload_date?: string;
  /**
   * filter results by type, can be: any | video | channel | playlist | movie
   */
  type?: string;
  /**
   * filter videos by duration, can be: any | short | medium | long
   */
  duration?: string;
  /**
   * filter video results by order, can be: relevance | rating | upload_date | view_count
   */
  sort_by?: string;
}

export interface SearchSuggestionOptions {
  /**
   * client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
   * @default "YOUTUBE"
   */
  client?: string;
}

export interface StreamingDataOptions {
  /**
   * video quality; 360p, 720p, 1080p, etc...
   */
  quality?: string;
  /**
   * download type, can be: video, audio or videoandaudio
   */
  type?: string;
  /**
   * file format
   */
  format?: string;
}

export interface DownloadOptions {
  /**
   * video quality; 360p, 720p, 1080p, etc...
   */
  quality?: string;
  /**
   * download type, can be: video, audio or videoandaudio
   */
  type?: string;
  /**
   * file format
   */
  format?: string;
  /**
   * download range, indicates which bytes should be downloaded.
   */
  range?: {
    start: number;
    end: number;
  };
}

/** @namespace */
class Innertube {
  #player: Player;
  #request: Request;
  config: InnertubeConfig;
  key: string;
  version: string;
  context: object;
  logged_in: boolean;
  sts: number;
  player_url: string;
  /**
   * @fires Innertube#auth - fired when signing in to an account.
   * @fires Innertube#update-credentials - fired when the access token is no longer valid.
   */
  ev: EventEmitter;
  oauth: OAuth;
  actions: Actions;
  account: AccountManager;
  playlist: PlaylistManager;
  interact: InteractionManager;
  music: YTMusic;

  /**
   * @example
   * ```js
   * import Innertube from 'youtubei.js';
   * const youtube = await new Innertube();
   * ```
   */
  constructor(config: InnertubeConfig = {}) {
    this.config = config;
    // @ts-ignore - this should probably be refactored, but is okay for now
    return this.#init();
  }

  async #init() {
    const request = new Request(this.config);
    const session = await new SessionBuilder(this.config, request.instance).build();
    
    this.key = session.key;
    this.version = session.api_version;
    this.context = session.context;
    this.logged_in = !!this.config.cookie;
    this.sts = session.player.sts;
    this.player_url = session.player.url;
    this.#player = session.player;

    request.setSession(this);

    this.#request = request.instance;

    this.ev = new EventEmitter();
    this.oauth = new OAuth(this.ev, request.instance);

    this.actions = new Actions(this);
    this.account = new AccountManager(this.actions);
    this.playlist = new PlaylistManager(this.actions);
    this.interact = new InteractionManager(this.actions);
    this.music = new YTMusic(this);

    return this;
  }

  /**
   * Signs in to a google account.
   */
  async signIn(credentials: SignInCredientials = {}): Promise<void> {
    return new Promise(async (resolve) => {
      this.oauth.init(credentials);

      if (this.oauth.validateCredentials()) {
        await this.oauth.checkAccessTokenValidity();
        this.logged_in = true;
        resolve();
      }

      this.ev.on('auth', (data) => {
        this.logged_in = true;
        if (data.status === 'SUCCESS') resolve();
      });
    });
  }

  /**
   * Signs out of an account.
   */
  async signOut(): Promise<{ success: boolean, status_code: number }> {
    if (!this.logged_in) throw new InnertubeError('You are not signed in');

    const response = await this.oauth.revokeCredentials();

    this.logged_in = false;

    return response;
  }

  /**
   * Retrieves video info.
   */
  async getInfo(video_id: string): Promise<VideoInfo> {
    throwIfMissing({ video_id });
    const cpn = generateRandomString(16);

    const initial_info = this.actions.getVideoInfo(video_id, cpn);
    const continuation = this.actions.next({ video_id });

    const response = await Promise.all([ initial_info, continuation ]);
    return new VideoInfo(response, this.actions, this.#player, cpn);
  }

  /**
   * Retrieves basic video info.
   */
  async getBasicInfo(video_id: string): Promise<VideoInfo> {
    throwIfMissing({ video_id });
    const cpn = generateRandomString(16);

    const response = await this.actions.getVideoInfo(video_id, cpn);
    return new VideoInfo([ response, {} ], this.actions, this.#player, cpn);
  }

  /**
   * Searches a given query.
   *
   * @param query - search query.
   * @param filters - search filters.
   */
  async search(query: string, filters: SearchFilters = {}): Promise<Search> {
    throwIfMissing({ query });

    const response = await this.actions.search({ query, filters });
    return new Search(this.actions, response.data);
  }

  /**
   * Retrieves search suggestions for a given query.
   *
   * @param query - the search query.
   * @param options - search options.
   */
  async getSearchSuggestions(query: string, options: SearchSuggestionOptions = { client: 'YOUTUBE' }): Promise<{ query: string, results: string[] }> {
    throwIfMissing({ query });

    const response = await this.actions.getSearchSuggestions(options.client, query);
    if (options.client === 'YTMUSIC' && !response.data.contents) return [];

    const suggestions = new OldParser(this, response.data, {
      client: options.client,
      data_type: 'SEARCH_SUGGESTIONS'
    }).parse();

    return suggestions;
  }

  /**
   * Retrieves comments for a video.
   *
   * @param video_id - the video id.
   * @param sort_by - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
   */
  async getComments(video_id: string, sort_by: string): Promise<Comments> {
    throwIfMissing({ video_id });

    const payload = Proto.encodeCommentsSectionParams(video_id, {
      sort_by: sort_by || 'TOP_COMMENTS'
    });

    const response = await this.actions.next({ ctoken: payload });

    return new Comments(this.actions, response.data);
  }

  /**
   * Retrieves YouTube's home feed (aka recommendations).
   */
  async getHomeFeed(): Promise<FilterableFeed> {
    const response = await this.actions.browse('FEwhat_to_watch');
    return new FilterableFeed(this.actions, response.data);
  }

  /**
   * Returns the account's library.
   */
  async getLibrary(): Promise<Library> {
    const response = await this.actions.browse('FElibrary');
    return new Library(response.data, this.actions);
  }

  /**
   * Retrieves watch history.
   * Which can also be achieved through {@link getLibrary()}.
   */
  async getHistory(): Promise<History> {
    const response = await this.actions.browse('FEhistory');
    return new History(this.actions, response.data);
  }

  /**
   * Retrieves trending content.
   */
  async getTrending(): Promise<TabbedFeed> {
    const response = await this.actions.browse('FEtrending');
    return new TabbedFeed(this.actions, response.data);
  }

  /**
   * Retrieves subscriptions feed.
   */
  async getSubscriptionsFeed(): Promise<{ items: Array<{ date: string, videos: object[] }> }> {
    const response = await this.actions.browse('FEsubscriptions');

    const subsfeed = new OldParser(this, response, {
      client: 'YOUTUBE',
      data_type: 'SUBSFEED'
    }).parse();

    return subsfeed;
  }

  /**
   * Retrieves contents for a given channel. (WIP)
   *
   * @param id - channel id
   */
  async getChannel(id: string): Promise<Channel> {
    throwIfMissing({ id });
    const response = await this.actions.browse(id);
    return new Channel(this.actions, response.data);
  }

  /**
   * Retrieves notifications.
   */
  async getNotifications(): Promise<{ items: Array<{ title: string, sent_time: string, channel_name: string, channel_thumbnail: object, video_thumbnail: object, video_url: string, read: boolean, notification_id: string }>}> {
    const response = await this.actions.notifications('get_notification_menu');

    const notifications = new OldParser(this, response.data, {
      client: 'YOUTUBE',
      data_type: 'NOTIFICATIONS'
    }).parse();

    return notifications;
  }

  /**
   * Retrieves unseen notifications count.
   */
  async getUnseenNotificationsCount(): Promise<number> {
    const response = await this.actions.notifications('get_unseen_count');
    return response.data.unseenCount;
  }

  /**
   * Retrieves the contents of a given playlist.
   *
   * @param playlist_id - the id of the playlist.
   */
  async getPlaylist(playlist_id: string): Promise<Playlist> {
    throwIfMissing({ playlist_id });
    const response = await this.actions.browse(`VL${playlist_id.replace(/VL/g, '')}`);
    return new Playlist(this.actions, response.data);
  }

  /**
   * An alternative to {@link download}.
   * Returns deciphered streaming data.
   *
   * @param video_id - video id
   * @param options - download options.
   */
  async getStreamingData(video_id: string, options: StreamingDataOptions = {}): Promise<object> {
    const info = await this.getBasicInfo(video_id);
    return info.chooseFormat(options);
  }

  /**
   * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
   *
   * @param video_id - video id
   * @param options - download options.
   */
  download(video_id: string, options: DownloadOptions = {}): PassThrough {
    throwIfMissing({ video_id });
    const stream = new PassThrough();

    (async () => {
      const info = await this.getBasicInfo(video_id);
      stream.emit('info', info);
      info.download(options, stream);
    })();

    return stream;
  }

  getPlayer() {
    return this.#player;
  }

  /** @readonly */
  get request() {
    return this.#request;
  }
}

export default Innertube;