export = PlaylistManager;
/** @namespace */
declare class PlaylistManager {
    /**
     * @param {import('../Actions')} actions
     */
    constructor(actions: any);
    /**
     * Creates a playlist.
     * @param {string} title
     * @param {string[]} video_ids
     */
    create(title: string, video_ids: string[]): Promise<{
        playlist_id: any;
        data: any;
    }>;
    /**
     * Deletes a given playlist.
     * @param {string} playlist_id
     */
    delete(playlist_id: string): Promise<{
        playlist_id: string;
        data: any;
    }>;
    /**
     * Adds videos to a given playlist.
     * @param {string} playlist_id
     * @param {Array.<string>} video_ids
     */
    addVideos(playlist_id: string, video_ids: Array<string>): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
    /**
     * Removes videos from a given playlist.
     *
     * @param {string} playlist_id
     * @param {Array.<string>} video_ids
     */
    removeVideos(playlist_id: string, video_ids: Array<string>): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
    /**
     * Moves a video to a new position within a given playlist.
     * @param {string} playlist_id
     * @param {string} moved_video_id
     * @param {string} predecessor_video_id
     */
    moveVideo(playlist_id: string, moved_video_id: string, predecessor_video_id: string): Promise<{
        playlist_id: string;
        action_result: any;
    }>;
    #private;
}
