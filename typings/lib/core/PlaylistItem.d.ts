export = SimplePlaylist;
/**
 * Wraps around:
 * - Playlist
 * - GridPlaylist
 *
 * Provides a unified interface for all of them.
 *
 * TODO: refactor - name this PlaylistItem
 */
declare class SimplePlaylist {
    static get regex(): RegExp;
    /**
     * Wrap around a playlist
     * @param {import('../parser/contents/Playlist') | import('../parser/contents/GridPlaylist')} playlist
     */
    constructor(playlist: import('../parser/contents/Playlist') | import('../parser/contents/GridPlaylist'));
    get id(): any;
    get title(): string;
    get thumbnail(): any;
    get thumbnails(): any;
    get video_thumbnails(): any;
    get author(): any;
    #private;
}
