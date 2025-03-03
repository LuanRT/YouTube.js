import type { IParsedResponse } from '../../parser/index.js';
import { Parser, ReloadContinuationItemsCommand } from '../../parser/index.js';
import { concatMemos, InnertubeError } from '../../utils/Utils.js';

import BackstagePost from '../../parser/classes/BackstagePost.js';
import SharedPost from '../../parser/classes/SharedPost.js';
import Channel from '../../parser/classes/Channel.js';
import CompactVideo from '../../parser/classes/CompactVideo.js';
import GridChannel from '../../parser/classes/GridChannel.js';
import GridPlaylist from '../../parser/classes/GridPlaylist.js';
import GridVideo from '../../parser/classes/GridVideo.js';
import LockupView from '../../parser/classes/LockupView.js';
import Playlist from '../../parser/classes/Playlist.js';
import PlaylistPanelVideo from '../../parser/classes/PlaylistPanelVideo.js';
import PlaylistVideo from '../../parser/classes/PlaylistVideo.js';
import Post from '../../parser/classes/Post.js';
import ReelItem from '../../parser/classes/ReelItem.js';
import ShortsLockupView from '../../parser/classes/ShortsLockupView.js';
import ReelShelf from '../../parser/classes/ReelShelf.js';
import RichShelf from '../../parser/classes/RichShelf.js';
import Shelf from '../../parser/classes/Shelf.js';
import Tab from '../../parser/classes/Tab.js';
import Video from '../../parser/classes/Video.js';

import AppendContinuationItemsAction from '../../parser/classes/actions/AppendContinuationItemsAction.js';
import ContinuationItem from '../../parser/classes/ContinuationItem.js';
import TwoColumnBrowseResults from '../../parser/classes/TwoColumnBrowseResults.js';
import TwoColumnSearchResults from '../../parser/classes/TwoColumnSearchResults.js';
import WatchCardCompactVideo from '../../parser/classes/WatchCardCompactVideo.js';

import type { Actions, ApiResponse } from '../index.js';
import type { Memo, ObservedArray } from '../../parser/helpers.js';
import type MusicQueue from '../../parser/classes/MusicQueue.js';
import type RichGrid from '../../parser/classes/RichGrid.js';
import type SectionList from '../../parser/classes/SectionList.js';
import type SecondarySearchContainer from '../../parser/classes/SecondarySearchContainer.js';
import type BrowseFeedActions from '../../parser/classes/BrowseFeedActions.js';
import type ProfileColumn from '../../parser/classes/ProfileColumn.js';

export default class Feed<T extends IParsedResponse = IParsedResponse> {
  readonly #page: T;
  readonly #actions: Actions;
  readonly #memo: Memo;

  #continuation?: ObservedArray<ContinuationItem>;
  
  constructor(actions: Actions, response: ApiResponse | IParsedResponse, already_parsed = false) {
    if (this.#isParsed(response) || already_parsed) {
      this.#page = response as T;
    } else {
      this.#page = Parser.parseResponse<T>(response.data);
    }

    const memo = concatMemos(...[
      this.#page.contents_memo,
      this.#page.continuation_contents_memo,
      this.#page.on_response_received_commands_memo,
      this.#page.on_response_received_endpoints_memo,
      this.#page.on_response_received_actions_memo,
      this.#page.sidebar_memo,
      this.#page.header_memo
    ]);

    if (!memo)
      throw new InnertubeError('No memo found in feed');

    this.#memo = memo;
    this.#actions = actions;
  }

  #isParsed(response: IParsedResponse | ApiResponse): response is IParsedResponse {
    return !('data' in response);
  }

  /**
   * Get all videos on a given page via memo
   */
  static getVideosFromMemo(memo: Memo) {
    return memo.getType(
      Video,
      GridVideo,
      ReelItem,
      ShortsLockupView,
      CompactVideo,
      PlaylistVideo,
      PlaylistPanelVideo,
      WatchCardCompactVideo
    );
  }

  /**
   * Get all playlists on a given page via memo
   */
  static getPlaylistsFromMemo(memo: Memo) {
    const playlists: ObservedArray<Playlist | GridPlaylist | LockupView> = memo.getType(Playlist, GridPlaylist);

    const lockup_views = memo.getType(LockupView)
      .filter((lockup) => {
        return [ 'PLAYLIST', 'ALBUM', 'PODCAST' ].includes(lockup.content_type);
      });

    if (lockup_views.length > 0) {
      playlists.push(...lockup_views);
    }

    return playlists;
  }

  /**
   * Get all the videos in the feed
   */
  get videos() {
    return Feed.getVideosFromMemo(this.#memo);
  }

  /**
   * Get all the community posts in the feed
   */
  get posts() {
    return this.#memo.getType(BackstagePost, Post, SharedPost);
  }

  /**
   * Get all the channels in the feed
   */
  get channels() {
    return this.#memo.getType(Channel, GridChannel);
  }

  /**
   * Get all playlists in the feed
   */
  get playlists() {
    return Feed.getPlaylistsFromMemo(this.#memo);
  }

  get memo() {
    return this.#memo;
  }

  /**
   * Returns contents from the page.
   */
  get page_contents(): SectionList | MusicQueue | RichGrid | ReloadContinuationItemsCommand {
    const tab_content = this.#memo.getType(Tab)?.[0].content;
    const reload_continuation_items = this.#memo.getType(ReloadContinuationItemsCommand)[0];
    const append_continuation_items = this.#memo.getType(AppendContinuationItemsAction)[0];

    return tab_content || reload_continuation_items || append_continuation_items;
  }

  /**
   * Returns all segments/sections from the page.
   */
  get shelves() {
    return this.#memo.getType(Shelf, RichShelf, ReelShelf);
  }

  /**
   * Finds shelf by title.
   */
  getShelf(title: string) {
    return this.shelves.get({ title });
  }

  /**
   * Returns secondary contents from the page.
   */
  get secondary_contents(): SectionList | SecondarySearchContainer | BrowseFeedActions | ProfileColumn | null {
    if (!this.#page.contents?.is_node)
      return null;

    const node = this.#page.contents?.item();

    if (!node.is(TwoColumnBrowseResults, TwoColumnSearchResults))
      return null;

    return node.secondary_contents;
  }

  get actions(): Actions {
    return this.#actions;
  }

  /**
   * Get the original page data
   */
  get page(): T {
    return this.#page;
  }

  /**
   * Checks if the feed has continuation.
   */
  get has_continuation(): boolean {
    return this.#getBodyContinuations().length > 0;
  }

  /**
   * Retrieves continuation data as it is.
   */
  async getContinuationData(): Promise<T | undefined> {
    if (this.#continuation) {
      if (this.#continuation.length === 0)
        throw new InnertubeError('There are no continuations.');

      return await this.#continuation[0].endpoint.call<T>(this.#actions, { parse: true });
    }

    this.#continuation = this.#getBodyContinuations();

    if (this.#continuation)
      return this.getContinuationData();
  }

  /**
   * Retrieves next batch of contents and returns a new {@link Feed} object.
   */
  async getContinuation(): Promise<Feed<T>> {
    const continuation_data = await this.getContinuationData();
    if (!continuation_data)
      throw new InnertubeError('Could not get continuation data');
    return new Feed<T>(this.actions, continuation_data, true);
  }

  #getBodyContinuations(): ObservedArray<ContinuationItem> {
    if (this.#page.header_memo) {
      const header_continuations = this.#page.header_memo.getType(ContinuationItem);
      return this.#memo.getType(ContinuationItem).filter(
        (continuation) => !header_continuations.includes(continuation)
      ) as ObservedArray<ContinuationItem>;
    }
    return this.#memo.getType(ContinuationItem);
  }
}