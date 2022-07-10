'use strict';

import ResultsParser from '../parser/contents';
import { InnertubeError } from '../utils/Utils';
import type ContinuationItem from '../parser/contents/classes/ContinuationItem';
import type Actions from '../core/Actions';
import type Video from '../parser/contents/classes/Video';
import type GridVideo from '../parser/contents/classes/GridVideo';
import type CompactVideo from '../parser/contents/classes/CompactVideo'
import type PlaylistVideo from '../parser/contents/classes/PlaylistVideo';
import type PlaylistPanelVideo from '../parser/contents/classes/PlaylistPanelVideo';
import type WatchCardCompactVideo from '../parser/contents/classes/WatchCardCompactVideo';
import type Playlist from '../parser/contents/classes/Playlist';
import type GridPlaylist from '../parser/contents/classes/GridPlaylist';
import type BackstagePost from '../parser/contents/classes/BackstagePost';
import type Post from '../parser/contents/classes/Post';
import type Channel from '../parser/contents/classes/Channel';
import type GridChannel from '../parser/contents/classes/GridChannel';
import type Shelf from '../parser/contents/classes/Shelf';
import type RichShelf from '../parser/contents/classes/RichShelf';
import type ReelShelf from '../parser/contents/classes/ReelShelf';

// TODO: add a way subdivide into sections and return subfeeds?

class Feed {
  #page;

  #continuation: ContinuationItem[];

  #actions: Actions;

  #memo;

  constructor(actions: Actions, data, already_parsed = false) {
    if (data.on_response_received_actions || data.on_response_received_endpoints || already_parsed) {
      this.#page = data;
    } else {
      this.#page = ResultsParser.parseResponse(data);
    }

    this.#memo =

    this.#page.on_response_received_commands ?
      this.#page.on_response_received_commands_memo :

      this.#page.on_response_received_endpoints ?
        this.#page.on_response_received_endpoints_memo :

        this.#page.contents ?
          this.#page.contents_memo :

          this.#page.on_response_received_actions ?
            this.#page.on_response_received_actions_memo : [];

    this.#actions = actions;
  }

  /**
   * Get all videos on a given page via memo
   *
   */
  static getVideosFromMemo(memo: Map<string, any[]>): Array<Video| GridVideo | CompactVideo | PlaylistVideo | PlaylistPanelVideo | WatchCardCompactVideo> {
    const videos = memo.get('Video') || [];
    const grid_videos = memo.get('GridVideo') || [];
    const compact_videos = memo.get('CompactVideo') || [];
    const playlist_videos = memo.get('PlaylistVideo') || [];
    const playlist_panel_videos = memo.get('PlaylistPanelVideo') || [];
    const watch_card_compact_videos = memo.get('WatchCardCompactVideo') || [];

    return [
      ...videos,
      ...grid_videos,
      ...compact_videos,
      ...playlist_videos,
      ...playlist_panel_videos,
      ...watch_card_compact_videos
    ];
  }

  /**
   * Get all playlists on a given page via memo
   *
   * @param memo
   * 
   */
  static getPlaylistsFromMemo(memo: Map<string, any[]>): Array<Playlist | GridPlaylist> {
    const playlists = memo.get('Playlist') || [];
    const grid_playlists = memo.get('GridPlaylist') || [];
    return [ ...playlists, ...grid_playlists ];
  }

  /**
   * Get all the videos in the feed
   */
  get videos() {
    return Feed.getVideosFromMemo(this.#memo);
  }

  /**
   * Get all the community posts in the feed
   *
   * 
   */
  get posts(): BackstagePost[] | Post[] {
    return this.#memo.get('BackstagePost') || this.#memo.get('Post') || [];
  }

  /**
   * Get all the channels in the feed
   *
   * 
   */
  get channels(): Array<Channel | GridChannel> {
    const channels = this.#memo.get('Channel') || [];
    const grid_channels = this.#memo.get('GridChannel') || [];
    return [ ...channels, ...grid_channels ];
  }

  /**
   * Get all playlists in the feed
   *
   * 
   */
  get playlists(): Array<Playlist | GridPlaylist> {
    return Feed.getPlaylistsFromMemo(this.#memo);
  }

  get memo() {
    return this.#memo;
  }

  /**
   * Returns contents from the page.
   *
   * 
   */
  get contents(): any {
    const tab_content = this.#memo.get('Tab')?.[0]?.content;
    const reload_continuation_items = this.#memo.get('reloadContinuationItemsCommand')?.[0];
    const append_continuation_items = this.#memo.get('appendContinuationItemsAction')?.[0];

    return tab_content || reload_continuation_items || append_continuation_items;
  }

  /**
   * Returns all segments/sections from the page.
   *
   * 
   */
  get shelves(): Shelf[] | RichShelf[] | ReelShelf[] {
    const shelf = this.#page.contents_memo.get('Shelf') || [];
    const rich_shelf = this.#page.contents_memo.get('RichShelf') || [];
    const reel_shelf = this.#page.contents_memo.get('ReelShelf') || [];

    return [ ...shelf, ...rich_shelf, ...reel_shelf ];
  }

  /**
   * Finds shelf by title.
   *
   * @param title
   */
  getShelf(title: string) {
    return this.shelves.find((shelf) => shelf.title.toString() === title);
  }

  /**
   * Returns secondary contents from the page.
   *
   * 
   */
  get secondary_contents(): any {
    return this.page.contents?.secondary_contents;
  }

  get actions() {
    return this.#actions;
  }

  /**
   * Get the original page data
   */
  get page() {
    return this.#page;
  }

  /**
   * Checks if the feed has continuation.
   */
  get has_continuation(): boolean {
    return (this.#memo.get('ContinuationItem') || []).length > 0;
  }

  /**
   * Retrieves continuation data as it is.
   *
   */
  async getContinuationData(): Promise<any> {
    if (this.#continuation) {
      if (this.#continuation.length > 1)
        throw new InnertubeError('There are too many continuations, you\'ll need to find the correct one yourself in this.page');
      if (this.#continuation.length === 0)
        throw new InnertubeError('There are no continuations');

      const response = await this.#continuation[0].endpoint.call(this.#actions);

      return response;
    }

    this.#continuation = this.#memo.get('ContinuationItem');

    if (this.#continuation)
      return this.getContinuationData();

    return null;
  }

  /**
   * Retrieves next batch of contents and returns a new {@link Feed} object.
   */
  async getContinuation(): Promise<Feed> {
    const continuation_data = await this.getContinuationData();
    return new Feed(this.actions, continuation_data, true);
  }
}

export default Feed;