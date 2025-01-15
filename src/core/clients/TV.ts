import { HorizontalListContinuation, type IBrowseResponse } from '../../parser/index.js';
import { Parser } from '../../parser/index.js';
import type { Actions, Session } from '../index.js';
import type { InnerTubeClient } from '../../types/index.js';
import NavigationEndpoint from '../../parser/classes/NavigationEndpoint.js';
import { HomeFeed, VideoInfo, MyYoutubeFeed } from '../../parser/yttv/index.js';
import { generateRandomString, InnertubeError, throwIfMissing } from '../../utils/Utils.js';
import HorizontalList from '../../parser/classes/HorizontalList.js';
import type { YTNode } from '../../parser/helpers.js';
import Playlist from '../../parser/yttv/Playlist.js';
import Library from '../../parser/yttv/Library.js';
import SubscriptionsFeed from '../../parser/yttv/SubscriptionsFeed.js';
import PlaylistsFeed from '../../parser/yttv/PlaylistsFeed.js';

export default class TV {
  #session: Session;
  readonly #actions: Actions;

  constructor(session: Session) {
    this.#session = session;
    this.#actions = session.actions;
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

    const watch_response = watch_endpoint.call(this.#session.actions, {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          lactMilliseconds: '-1',
          signatureTimestamp: this.#session.player?.sts
        }
      },
      serviceIntegrityDimensions: {
        poToken: this.#session.po_token
      },
      client
    });

    const watch_next_response = await watch_next_endpoint.call(this.#session.actions, {
      client
    });

    const response = await Promise.all([ watch_response, watch_next_response ]);

    const cpn = generateRandomString(16);

    return new VideoInfo(response, this.#actions, cpn);
  }

  async getHomeFeed(): Promise<HomeFeed> {
    const client : InnerTubeClient = 'TV';
    const home_feed = new NavigationEndpoint({ browseEndpoint: {
      browseId: 'default'
    } });
    const response = await home_feed.call(this.#session.actions, {
      client
    });
    return new HomeFeed(response, this.#actions);
  }

  async getLibrary(): Promise<Library> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FElibrary' } });
    const response = await browse_endpoint.call(this.#session.actions, {
      client: 'TV'
    });
    return new Library(response, this.#actions);
  }
  
  async getSubscriptionsFeed(): Promise<SubscriptionsFeed> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEsubscriptions' } });
    const response = await browse_endpoint.call(this.#session.actions, { client: 'TV' });
    return new SubscriptionsFeed(response, this.#actions);
  }

  /**
   * Retrieves the user's playlists.
   */
  async getPlaylists(): Promise<PlaylistsFeed> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEplaylist_aggregation' } });
    const response = await browse_endpoint.call(this.#session.actions, { client: 'TV' });
    return new PlaylistsFeed(response, this.#actions);
  }

  /**
   * Retrieves the user's My YouTube page.
   */
  async getMyYoutubeFeed(): Promise<MyYoutubeFeed> {
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: 'FEmy_youtube' } });
    const response = await browse_endpoint.call(this.#session.actions, { client: 'TV' });
    return new MyYoutubeFeed(response, this.#actions);
  }

  async getPlaylist(id: string): Promise<Playlist> {
    throwIfMissing({ id });

    if (!id.startsWith('VL')) {
      id = `VL${id}`;
    }

    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: id } });
    const response = await browse_endpoint.call(this.#session.actions, {
      client: 'TV'
    });

    return new Playlist(response, this.#actions);
  }
  
  // Utils
  
  async fetchContinuationData(item: YTNode, client?: InnerTubeClient) {
    let continuation: string | undefined;
    
    if (item.is(HorizontalList)) {
      continuation = item.continuations?.first()?.continuation;
    } else if (item.is(HorizontalListContinuation)) {
      continuation = item.continuation;
    } else {
      throw new InnertubeError(`No supported YTNode supplied. Type: ${item.type}`);
    }
    
    if (!continuation) {
      throw new InnertubeError('No continuation data available.');
    }
    
    const data = await this.#actions.execute('/browse', {
      client: client ?? 'TV',
      continuation: continuation
    });

    const parser = Parser.parseResponse<IBrowseResponse>(data.data);
    return parser.continuation_contents;
  }
  
  // Interactions for TV (for default OAuth login)

  /**
   * Adds videos to a given playlist.
   * @param playlist_id - The playlist ID.
   * @param video_ids - An array of video IDs to add to the playlist.
   * @param client - Innertube Client to use for request
   */
  async addVideos(playlist_id: string, video_ids: string[], client?: InnerTubeClient): Promise<{ playlist_id: string; action_result: any }> {
    throwIfMissing({ playlist_id, video_ids });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const playlist_edit_endpoint = new NavigationEndpoint({
      playlistEditEndpoint: {
        playlistId: playlist_id,
        actions: video_ids.map((id) => ({
          action: 'ACTION_ADD_VIDEO',
          addedVideoId: id
        }))
      }
    });

    const response = await playlist_edit_endpoint.call(this.#actions, {
      client
    });

    return {
      playlist_id,
      action_result: response.data.actions // TODO: implement actions in the parser
    };
  }

  /**
   * Adds a given playlist to the library of a user.
   * @param playlist_id - The playlist ID.
   */
  async addToLibrary(playlist_id: string){
    throwIfMissing({ playlist_id });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const like_playlist_endpoint = new NavigationEndpoint({
      likeEndpoint: {
        status: 'LIKE',
        target: playlist_id
      }
    });

    return await like_playlist_endpoint.call(this.#actions, {
      client: 'TV'
    });
  }

  /**
   * Remove a given playlist to the library of a user.
   * @param playlist_id - The playlist ID.
   */
  async removeFromLibrary(playlist_id: string){
    throwIfMissing({ playlist_id });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const remove_like_playlist_endpoint = new NavigationEndpoint({
      likeEndpoint: {
        status: 'INDIFFERENT',
        target: playlist_id
      }
    });

    return await remove_like_playlist_endpoint.call(this.#actions, {
      client: 'TV'
    });
  }
}