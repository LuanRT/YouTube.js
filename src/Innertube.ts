
import Session, { SessionOptions } from './core/Session';

import Search from './parser/youtube/Search';
import Channel from './parser/youtube/Channel';
import Playlist from './parser/youtube/Playlist';
import Library from './parser/youtube/Library';
import History from './parser/youtube/History';
import Comments from './parser/youtube/Comments';
import NotificationsMenu from './parser/youtube/NotificationsMenu';
import VideoInfo, { DownloadOptions, FormatOptions } from './parser/youtube/VideoInfo';

import Feed from './core/Feed';
import YTMusic from './core/Music';
import AccountManager from './core/AccountManager';
import PlaylistManager from './core/PlaylistManager';
import InteractionManager from './core/InteractionManager';
import FilterableFeed from './core/FilterableFeed';
import TabbedFeed from './core/TabbedFeed';
import Constants from './utils/Constants';
import Proto from './proto/index';

import { throwIfMissing, generateRandomString } from './utils/Utils';

export type InnertubeConfig = SessionOptions

export interface SearchFilters {
  /**
   * Filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
   */
  upload_date?: 'any' | 'last_hour' | 'today' | 'this_week' | 'this_month' | 'this_year';
  /**
   * Filter results by type, can be: any | video | channel | playlist | movie
   */
  type?: 'any' | 'video' | 'channel' | 'playlist' | 'movie';
  /**
   * Filter videos by duration, can be: any | short | medium | long
   */
  duration?: 'any' | 'short' | 'medium' | 'long';
  /**
   * Filter video results by order, can be: relevance | rating | upload_date | view_count
   */
  sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count';
}

class Innertube {
  session;
  account;
  playlist;
  interact;
  music;
  actions;

  constructor(session: Session) {
    this.session = session;
    this.account = new AccountManager(this.session.actions);
    this.playlist = new PlaylistManager(this.session.actions);
    this.interact = new InteractionManager(this.session.actions);
    this.music = new YTMusic(this.session);
    this.actions = this.session.actions;
  }

  static async create(config: InnertubeConfig = {}) {
    return new Innertube(await Session.create(config));
  }

  /**
   * Retrieves video info.
   */
  async getInfo(video_id: string) {
    throwIfMissing({ video_id });

    const cpn = generateRandomString(16);

    const initial_info = this.actions.getVideoInfo(video_id, cpn);
    const continuation = this.actions.next({ video_id });

    const response = await Promise.all([ initial_info, continuation ]);
    return new VideoInfo(response, this.actions, this.session.player, cpn);
  }

  /**
   * Retrieves basic video info.
   */
  async getBasicInfo(video_id: string) {
    throwIfMissing({ video_id });

    const cpn = generateRandomString(16);
    const response = await this.actions.getVideoInfo(video_id, cpn);

    return new VideoInfo([ response ], this.actions, this.session.player, cpn);
  }

  /**
   * Searches a given query.
   * @param query - search query.
   * @param filters - search filters.
   */
  async search(query: string, filters: SearchFilters = {}) {
    throwIfMissing({ query });
    const response = await this.actions.search({ query, filters });
    return new Search(this.actions, response.data);
  }

  /**
   * Retrieves search suggestions for a given query.
   * @param query - the search query.
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
   * @param video_id - the video id.
   * @param sort_by - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
   */
  async getComments(video_id: string, sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST') {
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
  async getHomeFeed() {
    const response = await this.actions.browse('FEwhat_to_watch');
    return new FilterableFeed(this.actions, response.data);
  }

  /**
   * Returns the account's library.
   */
  async getLibrary() {
    const response = await this.actions.browse('FElibrary');
    return new Library(response.data, this.actions);
  }

  /**
   * Retrieves watch history.
   * Which can also be achieved with {@link getLibrary}.
   */
  async getHistory() {
    const response = await this.actions.browse('FEhistory');
    return new History(this.actions, response.data);
  }

  /**
   * Retrieves trending content.
   */
  async getTrending() {
    const response = await this.actions.browse('FEtrending');
    return new TabbedFeed(this.actions, response.data);
  }

  /**
   * Retrieves subscriptions feed.
   */
  async getSubscriptionsFeed() {
    const response = await this.actions.browse('FEsubscriptions');
    return new Feed(this.actions, response.data);
  }

  /**
   * Retrieves contents for a given channel.
   * @param id - channel id
   */
  async getChannel(id: string) {
    throwIfMissing({ id });
    const response = await this.actions.browse(id);
    return new Channel(this.actions, response.data);
  }

  /**
   * Retrieves notifications.
   */
  async getNotifications() {
    const response = await this.actions.notifications('get_notification_menu');
    return new NotificationsMenu(this.actions, response.data);
  }

  /**
   * Retrieves unseen notifications count.
   */
  async getUnseenNotificationsCount() {
    const response = await this.actions.notifications('get_unseen_count');
    return response.data.unseenCount;
  }

  /**
   * Retrieves the contents of a given playlist.
   * @param playlist_id - the id of the playlist.
   */
  async getPlaylist(playlist_id: string) {
    throwIfMissing({ playlist_id });
    const response = await this.actions.browse(`VL${playlist_id.replace(/VL/g, '')}`);
    return new Playlist(this.actions, response.data);
  }

  /**
   * An alternative to {@link download}.
   * Returns deciphered streaming data.
   *
   * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
   */
  async getStreamingData(video_id: string, options: FormatOptions = {}) {
    const info = await this.getBasicInfo(video_id);
    return info.chooseFormat(options);
  }

  /**
   * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
   *
   * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
   */
  async download(video_id: string, options?: DownloadOptions) {
    throwIfMissing({ video_id });
    const info = await this.getBasicInfo(video_id);
    return info.download(options);
  }
}

export default Innertube;