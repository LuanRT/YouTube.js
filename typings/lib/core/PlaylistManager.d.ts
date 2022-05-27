export = PlaylistManager;
/** @namespace */
declare class PlaylistManager {
    /**
     * @param {Actions} actions
     * @constructor
     */
    constructor(actions: Actions);
    /**
     * Creates a playlist.
     *
     * @param {string} title
     * @param {Array.<string>} video_ids
     *
     * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
     */
    create(title: string, video_ids: Array<string>): Promise<{
        success: boolean;
        status_code: number;
        playlist_id: string;
        data: object;
    }>;
    /**
     * Deletes a given playlist.
     * @param {string} playlist_id
     * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
     */
    delete(playlist_id: string): Promise<{
        success: boolean;
        status_code: number;
        playlist_id: string;
        data: object;
    }>;
    /**
     * Adds videos to a given playlist.
     *
     * @param {string} playlist_id
     * @param {Array.<string>} video_ids
     *
     * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
     */
    addVideos(playlist_id: string, video_ids: Array<string>): Promise<{
        success: boolean;
        status_code: number;
        playlist_id: string;
        data: object;
    }>;
    /**
     * Removes videos from a given playlist.
     *
     * @param {string} playlist_id
     * @param {Array.<string>} video_ids
     *
     * @returns {Promise.<{ success: boolean; status_code: number; playlist_id: string; data: object; }>}
     */
    removeVideos(playlist_id: string, video_ids: Array<string>): Promise<{
        success: boolean;
        status_code: number;
        playlist_id: string;
        data: object;
    }>;
    #private;
}
