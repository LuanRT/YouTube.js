'use strict';

import { findNode, InnertubeError, throwIfMissing } from '../utils/Utils';
import type Actions from './Actions';
import type { APIResponse } from '../utils/common';

interface PlaylistResponse<T> extends APIResponse<T> {
  playlist_id: string;
}

/** @namespace */
class PlaylistManager {
  #actions: Actions;

  constructor (actions: Actions) {
    this.#actions = actions;
  }

  /**
   * Creates a playlist.
   *
   * @param title
   * @param video_ids
   * 
   */
  async create(title: string, video_ids: string[]): Promise<PlaylistResponse<object>> {
    throwIfMissing({ title, video_ids });

    // TODO: a string[] is passed here when `ids` is a string. type changes might be necessary.
    const response = await this.#actions.playlist('playlist/create', { title, ids: video_ids });

    return {
      success: response.success,
      status_code: response.status_code,
      playlist_id: response.data.playlistId,
      data: response.data
    };
  }

  /**
   * Deletes a given playlist.
   *
   * @param playlist_id
   * 
   */
  async delete(playlist_id: string): Promise<PlaylistResponse<object>> {
    throwIfMissing({ playlist_id });

    const response = await this.#actions.playlist('playlist/delete', { playlist_id });

    return {
      playlist_id,
      success: response.success,
      status_code: response.status_code,
      data: response.data
    };
  }

  /**
   * Adds videos to a given playlist.
   *
   * @param playlist_id
   * @param video_ids
   * 
   */
  async addVideos(playlist_id: string, video_ids: Array<string>): Promise<PlaylistResponse<object>> {
    throwIfMissing({ playlist_id, video_ids });

    const response = await this.#actions.playlist('browse/edit_playlist', {
      ids: video_ids,
      action: 'ACTION_ADD_VIDEO',
      playlist_id
    });

    return {
      playlist_id,
      success: response.success,
      status_code: response.status_code,
      data: response.data
    };
  }

  /**
   * Removes videos from a given playlist.
   *
   * @param playlist_id
   * @param video_ids
   * 
   */
  async removeVideos(playlist_id: string, video_ids: Array<string>): Promise<PlaylistResponse<object>> {
    throwIfMissing({ playlist_id, video_ids });

    const plinfo = await this.#actions.browse(`VL${playlist_id}`);

    const list = findNode(plinfo.data, 'contents', 'contents', 13, false);
    if (!list.isEditable) throw new InnertubeError('This playlist cannot be edited.', playlist_id);

    const videos = list.contents.filter((item) => video_ids.includes(item.playlistVideoRenderer.videoId));
    const set_video_ids = videos.map((video) => video.playlistVideoRenderer.setVideoId);

    const response = await this.#actions.playlist('browse/edit_playlist', {
      ids: set_video_ids,
      action: 'ACTION_REMOVE_VIDEO',
      playlist_id
    });

    return {
      success: response.success,
      status_code: response.status_code,
      playlist_id,
      data: response.data
    };
  }
}

export default PlaylistManager;