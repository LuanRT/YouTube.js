import AppendContinuationItemsAction from '../parser/classes/actions/AppendContinuationItemsAction';
import BackstagePost from '../parser/classes/BackstagePost';
import Channel from '../parser/classes/Channel';
import CompactVideo from '../parser/classes/CompactVideo';
import ContinuationItem from '../parser/classes/ContinuationItem';
import GridChannel from '../parser/classes/GridChannel';
import GridPlaylist from '../parser/classes/GridPlaylist';
import GridVideo from '../parser/classes/GridVideo';
import Playlist from '../parser/classes/Playlist';
import PlaylistPanelVideo from '../parser/classes/PlaylistPanelVideo';
import PlaylistVideo from '../parser/classes/PlaylistVideo';
import Post from '../parser/classes/Post';
import ReelShelf from '../parser/classes/ReelShelf';
import RichShelf from '../parser/classes/RichShelf';
import Shelf from '../parser/classes/Shelf';
import Tab from '../parser/classes/Tab';
import TwoColumnBrowseResults from '../parser/classes/TwoColumnBrowseResults';
import TwoColumnSearchResults from '../parser/classes/TwoColumnSearchResults';
import Video from '../parser/classes/Video';
import WatchCardCompactVideo from '../parser/classes/WatchCardCompactVideo';
import { Memo, ObservedArray } from '../parser/helpers';
import Parser, { ParsedResponse, ReloadContinuationItemsCommand } from '../parser/index';
import { InnertubeError } from '../utils/Utils';
import Actions from './Actions';

// TODO: add a way subdivide into sections and return subfeeds?
class Feed {
  #page: ParsedResponse;
  #continuation?: ObservedArray<ContinuationItem>;
  #actions;
  #memo;

  constructor(actions: Actions, data: any, already_parsed = false) {
    if (data.on_response_received_actions || data.on_response_received_endpoints || already_parsed) {
      this.#page = data;
    } else {
      this.#page = Parser.parseResponse(data);
    }

    const memo =
            this.#page.on_response_received_commands ?
              this.#page.on_response_received_commands_memo :
              this.#page.on_response_received_endpoints ?
                this.#page.on_response_received_endpoints_memo :
                this.#page.contents ?
                  this.#page.contents_memo :
                  this.#page.on_response_received_actions ?
                    this.#page.on_response_received_actions_memo : undefined;

    if (!memo)
      throw new InnertubeError('No memo found in feed');

    this.#memo = memo;
    this.#actions = actions;
  }

  /**
   * Get all videos on a given page via memo
   */
  static getVideosFromMemo(memo: Memo) {
    return memo.getType<Video | GridVideo | CompactVideo | PlaylistVideo | PlaylistPanelVideo | WatchCardCompactVideo>([
      Video,
      GridVideo,
      CompactVideo,
      PlaylistVideo,
      PlaylistPanelVideo,
      WatchCardCompactVideo
    ]);
  }

  /**
   * Get all playlists on a given page via memo
   */
  static getPlaylistsFromMemo(memo: Memo) {
    return memo.getType<Playlist | GridPlaylist>([ Playlist, GridPlaylist ]);
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
    return this.#memo.getType<Post | BackstagePost>([ BackstagePost, Post ]);
  }

  /**
   * Get all the channels in the feed
   */
  get channels() {
    return this.#memo.getType<Channel | GridChannel>([ Channel, GridChannel ]);
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
  get contents() {
    const tab_content = this.#memo.getType(Tab)?.[0]?.content.item();
    const reload_continuation_items = this.#memo.getType(ReloadContinuationItemsCommand)?.[0];
    const append_continuation_items = this.#memo.getType(AppendContinuationItemsAction)?.[0];

    return tab_content || reload_continuation_items || append_continuation_items;
  }

  /**
   * Returns all segments/sections from the page.
   */
  get shelves() {
    return this.#memo.getType<Shelf | RichShelf | ReelShelf>([ Shelf, RichShelf, ReelShelf ]);
  }

  /**
   * Finds shelf by title.
   */
  getShelf(title: string) {
    return this.shelves.find((shelf) => shelf.title.toString() === title);
  }

  /**
   * Returns secondary contents from the page.
   */
  get secondary_contents() {
    if (!this.#page.contents.is_node)
      return undefined;

    const node = this.#page.contents.item();

    if (!node.is(TwoColumnBrowseResults, TwoColumnSearchResults))
      return undefined;

    return node.secondary_contents;
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
  get has_continuation() {
    return (this.#memo.get('ContinuationItem') || []).length > 0;
  }

  /**
   * Retrieves continuation data as it is.
   */
  async getContinuationData(): Promise<ParsedResponse | undefined> {
    if (this.#continuation) {
      if (this.#continuation.length > 1)
        throw new InnertubeError('There are too many continuations, you\'ll need to find the correct one yourself in this.page');
      if (this.#continuation.length === 0)
        throw new InnertubeError('There are no continuations');

      const response = await this.#continuation[0].endpoint.call(this.#actions, undefined, true);

      return response;
    }

    this.#continuation = this.#memo.getType(ContinuationItem);

    if (this.#continuation)
      return this.getContinuationData();
  }

  /**
   * Retrieves next batch of contents and returns a new {@link Feed} object.
   */
  async getContinuation() {
    const continuation_data = await this.getContinuationData();
    return new Feed(this.actions, continuation_data, true);
  }
}

export default Feed;