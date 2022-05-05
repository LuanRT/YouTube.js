/**
 * Wraps around:
 * - Playlist
 * - GridPlaylist
 * 
 * Provides a unified interface for all of them.
 * 
 * TODO: refactor - name this PlaylistItem
 */
class SimplePlaylist {
    /**
     * @type {import('../parser/contents/Playlist') | import('../parser/contents/GridPlaylist')}
     */
    #wrapper;
    /**
     * Wrap around a playlist
     * @param {import('../parser/contents/Playlist') | import('../parser/contents/GridPlaylist')} playlist 
     */
    constructor(playlist) {
        this.#wrapper = playlist;
    }

    get id() {
        return this.#wrapper.id;
    }

    get title() {
        return this.#wrapper.title.toString();
    }

    get thumbnail() {
        return this.#wrapper.thumbnails[0];
    }

    get thumbnails() {
        return this.#wrapper.thumbnails;
    }

    get video_thumbnails() {
        // TODO: verify this
        return this.#wrapper.video_thumbnails || this.#wrapper.first_videos.map(video => video.thumbnails);
    }

    get author() {
        return this.#wrapper.author;
    }

    // TODO: endpoints?
    // view playlist?

    static get regex() {
        return /^(Playlist|GridPlaylist)$/;
    }
}

module.exports = SimplePlaylist;
