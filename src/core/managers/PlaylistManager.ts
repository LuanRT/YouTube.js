import { InnertubeError, throwIfMissing } from '../../utils/Utils.js';
import Playlist from '../../parser/youtube/Playlist.js';

import type { Actions } from '../index.js';
import type { Feed } from '../mixins/index.js';
import NavigationEndpoint from '../../parser/classes/NavigationEndpoint.js';

export default class PlaylistManager {
  readonly #actions: Actions;

  constructor(actions: Actions) {
    this.#actions = actions;
  }

  /**
   * Creates a playlist.
   * @param title - The title of the playlist.
   * @param video_ids - An array of video IDs to add to the playlist.
   */
  async create(title: string, video_ids: string[]): Promise<{ success: boolean; status_code: number; playlist_id?: string; data: any }> {
    throwIfMissing({ title, video_ids });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const create_playlist_endpoint = new NavigationEndpoint({
      createPlaylistServiceEndpoint: {
        title,
        videoIds: video_ids
      }
    });

    const response = await create_playlist_endpoint.call(this.#actions);

    return {
      success: response.success,
      status_code: response.status_code,
      playlist_id: response.data.playlistId,
      data: response.data
    };
  }

  /**
   * Deletes a given playlist.
   * @param playlist_id - The playlist ID.
   */
  async delete(playlist_id: string): Promise<{ playlist_id: string; success: boolean; status_code: number; data: any }> {
    throwIfMissing({ playlist_id });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const delete_playlist_endpoint = new NavigationEndpoint({
      deletePlaylistServiceEndpoint: {
        sourcePlaylistId: playlist_id
      }
    });

    const response = await delete_playlist_endpoint.call(this.#actions);

    return {
      playlist_id,
      success: response.success,
      status_code: response.status_code,
      data: response.data
    };
  }
  
  /**
   * Adds a given playlist to the library of a user.
   * @param playlist_id - The playlist ID.
   */
  async likePlaylist(playlist_id: string){
    throwIfMissing({ playlist_id });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const response = await this.#actions.execute(
      LikeEndpoint.PATH, LikeEndpoint.build({
        target: { playlist_id }
      })
    );
    
    return response;
  }

  /**
   * Remove a given playlist to the library of a user.
   * @param playlist_id - The playlist ID.
   */
  async removeLikePlaylist(playlist_id: string){
    throwIfMissing({ playlist_id });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const response = await this.#actions.execute(
      LikeEndpoint.PATH, LikeEndpoint.build({
        target: { playlist_id }
      })
    );

    return response;
  }

  /**
   * Adds videos to a given playlist.
   * @param playlist_id - The playlist ID.
   * @param video_ids - An array of video IDs to add to the playlist.
   */
  async addVideos(playlist_id: string, video_ids: string[]): Promise<{ playlist_id: string; action_result: any }> {
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

    const response = await playlist_edit_endpoint.call(this.#actions);

    return {
      playlist_id,
      action_result: response.data.actions // TODO: implement actions in the parser
    };
  }

  /**
   * Removes videos from a given playlist.
   * @param playlist_id - The playlist ID.
   * @param video_ids - An array of video IDs to remove from the playlist.
   * @param use_set_video_ids - Option to remove videos using set video IDs.
   */
  async removeVideos(playlist_id: string, video_ids: string[], use_set_video_ids = false): Promise<{ playlist_id: string; action_result: any }> {
    throwIfMissing({ playlist_id, video_ids });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const playlist = await this.#getPlaylist(playlist_id);

    if (!playlist.info.is_editable)
      throw new InnertubeError('This playlist cannot be edited.', playlist_id);

    const payload = { playlistId: playlist_id, actions: [] as Record<string, any>[] };

    const getSetVideoIds = async (pl: Feed): Promise<void> => {
      const key_id = use_set_video_ids ? 'set_video_id' : 'id';
      const videos = pl.videos.filter((video) => video_ids.includes(video.key(key_id).string()));

      videos.forEach((video) =>
        payload.actions.push({
          action: 'ACTION_REMOVE_VIDEO',
          setVideoId: video.key('set_video_id').string()
        })
      );

      if (payload.actions.length < video_ids.length) {
        const next = await pl.getContinuation();
        return getSetVideoIds(next);
      }
    };

    await getSetVideoIds(playlist);

    if (!payload.actions.length)
      throw new InnertubeError('Given video ids were not found in this playlist.', video_ids);

    const playlist_edit_endpoint = new NavigationEndpoint({ playlistEditEndpoint: payload });
    const response = await playlist_edit_endpoint.call(this.#actions);

    return {
      playlist_id,
      action_result: response.data.actions // TODO: implement actions in the parser
    };
  }

  /**
   * Moves a video to a new position within a given playlist.
   * @param playlist_id - The playlist ID.
   * @param moved_video_id - The video ID to move.
   * @param predecessor_video_id - The video ID to move the moved video before.
   */
  async moveVideo(playlist_id: string, moved_video_id: string, predecessor_video_id: string): Promise<{ playlist_id: string; action_result: any; }> {
    throwIfMissing({ playlist_id, moved_video_id, predecessor_video_id });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const playlist = await this.#getPlaylist(playlist_id);

    if (!playlist.info.is_editable)
      throw new InnertubeError('This playlist cannot be edited.', playlist_id);

    const payload = { playlistId: playlist_id, actions: [] as Record<string, any>[] };

    let set_video_id_0: string | undefined, set_video_id_1: string | undefined;

    const getSetVideoIds = async (pl: Feed): Promise<void> => {
      const video_0 = pl.videos.find((video) => moved_video_id === video.key('id').string());
      const video_1 = pl.videos.find((video) => predecessor_video_id === video.key('id').string());

      set_video_id_0 = set_video_id_0 || video_0?.key('set_video_id').string();
      set_video_id_1 = set_video_id_1 || video_1?.key('set_video_id').string();

      if (!set_video_id_0 || !set_video_id_1) {
        const next = await pl.getContinuation();
        return getSetVideoIds(next);
      }
    };

    await getSetVideoIds(playlist);

    payload.actions.push({
      action: 'ACTION_MOVE_VIDEO_AFTER',
      setVideoId: set_video_id_0,
      movedSetVideoIdPredecessor: set_video_id_1
    });

    const playlist_edit_endpoint = new NavigationEndpoint({ playlistEditEndpoint: payload });
    const response = await playlist_edit_endpoint.call(this.#actions);

    return {
      playlist_id,
      action_result: response.data.actions // TODO: implement actions in the parser
    };
  }
  
  async #getPlaylist(playlist_id: string): Promise<Playlist> {
    let id = playlist_id;
    
    if (!id.startsWith('VL'))
      id = `VL${id}`;
    
    const browse_endpoint = new NavigationEndpoint({ browseEndpoint: { browseId: `VL${id}` } });
    const browse_response = await browse_endpoint.call(this.#actions, { parse: true });
    
    return new Playlist(this.#actions, browse_response, true);
  }

  /**
   * Sets the name for the given playlist.
   * @param playlist_id - The playlist ID.
   * @param name - The name / title to use for the playlist.
   */
  async setName(playlist_id: string, name: string): Promise<{ playlist_id: string; action_result: any; }> {
    throwIfMissing({ playlist_id, name });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const payload = { playlist_id, actions: [] as Record<string, any>[] };

    payload.actions.push({
      action: 'ACTION_SET_PLAYLIST_NAME',
      playlistName: name
    });

    const playlist_edit_endpoint = new NavigationEndpoint({ playlistEditEndpoint: payload });
    const response = await playlist_edit_endpoint.call(this.#actions);

    return {
      playlist_id,
      action_result: response.data.actions
    };
  }

  /**
   * Sets the description for the given playlist.
   * @param playlist_id - The playlist ID.
   * @param description - The description to use for the playlist.
   */
  async setDescription(playlist_id: string, description: string): Promise<{ playlist_id: string; action_result: any; }> {
    throwIfMissing({ playlist_id, description });

    if (!this.#actions.session.logged_in)
      throw new InnertubeError('You must be signed in to perform this operation.');

    const payload = { playlistId: playlist_id, actions: [] as Record<string, any>[] };

    payload.actions.push({
      action: 'ACTION_SET_PLAYLIST_DESCRIPTION',
      playlistDescription: description
    });

    const playlist_edit_endpoint = new NavigationEndpoint({ playlistEditEndpoint: payload });
    const response = await playlist_edit_endpoint.call(this.#actions);

    return {
      playlist_id,
      action_result: response.data.actions
    };
  }
}
