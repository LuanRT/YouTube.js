export = PlaylistManager;
/** @namespace */
declare class PlaylistManager {
    /**
     * @param {import('../Actions')} actions
     */
    constructor(actions: any);
    /**
     * API
     *
     * @typedef {{ success: boolean, status_code: number, playlist_id: string, data: object }} Response
     */
    /**
     * Creates a playlist.
     *
     * @param {string} title
     * @param {string[]} video_ids
     * @returns {Promise.<Response>}
     */
    create(title: string, video_ids: string[]): Promise<{
        success: boolean;
        status_code: number;
        playlist_id: string;
        data: object;
    }>;
    /**
     * Deletes a given playlist.
     *
     * @param {string} playlist_id
     * @returns {Promise.<Response>}
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
     * @returns {Promise.<Response>}
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
     * @returns {Promise.<Response>}
     */
    removeVideos(playlist_id: string, video_ids: Array<string>): Promise<{
        success: boolean;
        status_code: number;
        playlist_id: string;
        data: object;
    }>;
    #private;
}
