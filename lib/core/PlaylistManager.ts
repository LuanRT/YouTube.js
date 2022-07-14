import { InnertubeError, throwIfMissing, findNode } from "../utils/Utils";
import Actions from "./Actions";

class PlaylistManager {
    #actions;
    constructor(actions: Actions) {
        this.#actions = actions;
    }
    /**
     * Creates a playlist.
     */
    async create(title: string, video_ids: string[]) {
        throwIfMissing({ title, video_ids });
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
     */
    async delete(playlist_id: string) {
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
     */
    async addVideos(playlist_id: string, video_ids: string[]) {
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
     */
    async removeVideos(playlist_id: string, video_ids: string[]) {
        throwIfMissing({ playlist_id, video_ids });
        const plinfo = await this.#actions.browse(`VL${playlist_id}`);
        const list = findNode(plinfo.data, 'contents', 'contents', 13, false);
        if (!list.isEditable)
            throw new InnertubeError('This playlist cannot be edited.', playlist_id);
        const videos = list.contents.filter((item: any) => video_ids.includes(item.playlistVideoRenderer.videoId));
        const set_video_ids = videos.map((video: any) => video.playlistVideoRenderer.setVideoId);
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
