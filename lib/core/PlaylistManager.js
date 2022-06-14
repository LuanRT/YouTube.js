'use strict';

const Utils = require('../utils/Utils');

/** @namespace */
class PlaylistManager {
  #actions;
  
  /**
   * @param {Actions} actions
   * @constructor
   */
  constructor (actions) {
    this.#actions = actions;
  }
  
  /**
   * Creates a playlist.
   * 
   * @param {string} title
   * @param {Array.<string>} video_ids
   * 
   * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
   */
  async create(title, video_ids) {
    Utils.throwIfMissing({ title, video_ids });
  
    const response = await this.#actions.playlist('playlist/create', { title, ids: video_ids });
  
    return {
      success: response.success,
      status_code: response.status_code,
      playlist_id: response.data.playlistId,
      data: response.data
    }
  }
  
  /**
   * Deletes a given playlist.
   * @param {string} playlist_id
   * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
   */
  async delete(playlist_id) {
    Utils.throwIfMissing({ playlist_id });
 
    const response = await this.#actions.playlist('playlist/delete', { playlist_id });
    
    return {
      success: response.success,
      status_code: response.status_code,
      playlist_id,
      data: response.data
    }
  }
  
  /**
   * Adds videos to a given playlist.
   * 
   * @param {string} playlist_id
   * @param {Array.<string>} video_ids
   * 
   * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
   */
  async addVideos(playlist_id, video_ids) {
    Utils.throwIfMissing({ playlist_id, video_ids });
     
    const response = await this.#actions.playlist('browse/edit_playlist', {
      ids: video_ids,
      action: 'ACTION_ADD_VIDEO',
      playlist_id
    });

    return {
      success: response.success,
      status_code: response.status_code,
      playlist_id,
      data: response.data
    }
  }
  
  /**
   * Removes videos from a given playlist.
   * 
   * @param {string} playlist_id
   * @param {Array.<string>} video_ids
   * 
   * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
   */
  async removeVideos(playlist_id, video_ids) {
    Utils.throwIfMissing({ playlist_id, video_ids });
  
    const plinfo = await this.#actions.browse(`VL${playlist_id}`);

    const list = Utils.findNode(plinfo.data, 'contents', 'contents', 13, false);
    if (!list.isEditable) throw new Utils.InnertubeError('This playlist cannot be edited.', playlist_id);

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
    }
  }
}

module.exports = PlaylistManager;