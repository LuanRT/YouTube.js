const Utils = require('../utils/Utils');

/**
 * Wraps around:
 * - Video
 * - GridVideo
 * - CompactVideo
 * - PlaylistVideo
 * - PlaylistPanelVideo
 * - TODO: WatchCardCompactVideo
 * 
 * Provides a unified interface for all of them.
 * 
 * TODO: refactor - name this VideoItem
 */
class SimpleVideo {
    /**
     * @type {import('../parser/contents/Video') | import('../parser/contents/GridVideo') | import('../parser/contents/CompactVideo') | import('../parser/contents/PlaylistVideo') | import('../parser/contents/PlaylistPanelVideo')}
     */
    #wrapper;
    constructor(video) {
        this.#wrapper = video;
    }

    getUnderlyingRenderer() {
        return this.#wrapper;
    }

    get id() {
        return this.#wrapper.id;
    }

    get title() {
        return this.#wrapper.title.toString();
    }

    get description() {
        return this.#wrapper.description && this.#wrapper.description.toString() || '';
    }

    get channel() {
        return this.#wrapper.author;
    }

    get metadata() {
        return {
            view_count: this.#wrapper.views?.toString(),
            short_view_count_text: this.#wrapper.short_view_count && {
                simple_text: this.#wrapper.short_view_count.toString(),
                // TODO: the accessiblity text is not yet parsed
                accessibility_label: "",
            },
            thumbnail: this.#wrapper.best_thumbnail,
            thumbnails: this.#wrapper.thumbnails,
            moving_thumbnail: this.#wrapper.rich_thumbnail?.thumbnails?.[0] || {},
            moving_thumbnails: this.#wrapper.rich_thumbnail?.thumbnails || [],
            published: this.#wrapper.published_at?.toString(),
            duration: {
                seconds: Utils.timeToSeconds(this.#wrapper.duration.toString()),
                simple_text: this.#wrapper.duration.toString(),
                // TODO: again - we need access to the accessibility data here
                accessibility_label: "",
            },
            badges: this.#wrapper.badges?.map(badge => badge.toString()) || [],
            owner_badges: this.#wrapper.author?.badges?.map(badge => badge.toString()),
        }
    }

    static get set() {
        return new Set(['Video','GridVideo','CompactVideo','PlaylistVideo','PlaylistPanelVideo']);
    }
}

module.exports = SimpleVideo;