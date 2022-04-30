const ResultsParser = require("../parser/contents");
const Simplify = require("../parser/simplify");
const Utils = require("../utils/Utils");

class HomeFeed {
    #page;
    #videos;
    #video_elements;
    constructor(data) {
        this.#page = ResultsParser.parseResponse(data);
    }

    /**
     * Get the original page data
     */
    get page() {
        return this.#page;
    }

    /**
     * Get all the videos in the home feed
     * @returns {Array<import('../parser/contents/Video')>}
     */
    getVideos() {
        if (this.#video_elements) return this.#video_elements;
        
        this.#video_elements = Simplify.matching({
            type: Simplify.matching(/^Video$/),
        }).runOn(this.#page);

        return this.#video_elements;
    }

    /**
     * Get all the videos in the home feed
     * @deprecated Use getVideos instead
     */
    get videos() {
        if (this.#videos) return this.#videos;

        const simplified = this.getVideos();

        this.#videos = simplified.map(video => {
            return {
                id: video.id,
                title: video.title.toString(),
                description: video.description,
                channel: {
                    id: video.author.id,
                    name: video.author.name,
                    url: video.author.endpoint.metadata.url,
                    thumbnail: video.author.best_thumbnail,
                    is_verified: video.author.is_verified,
                    is_verified_artist: video.author.is_verified_artist,
                },
                metadata: {
                    view_count: video.views.toString(),
                    short_view_count_text: {
                        simple_text: video.short_view_count.toString(),
                        // TODO: the accessiblity text is not yet parsed
                        accessibility_label: "",
                    },
                    thumbnail: video.best_thumbnail,
                    thumbnails: video.thumbnails,
                    // XXX: It doesn't look like this is returned?
                    //      but I'll send it anyway
                    moving_thumbnail: video.rich_thumbnail?.thumbnails?.[0] || {},
                    moving_thumbnails: video.rich_thumbnail?.thumbnails || [],
                    published: video.published_at.toString(),
                    duration: {
                        seconds: Utils.timeToSeconds(video.duration.toString()),
                        simple_text: video.duration.toString(),
                        // TODO: again - we need access to the accessibility data here
                        accessibility_label: "",
                    },
                    // XXX: this is different return types from the existing API
                    badges: video.badges,
                    owner_badges: video.author.badges,
                }
            }
        });

        return this.#videos;
    }

    getContinuation() {
        return; // TODO: implement this!
    }
}

module.exports = HomeFeed;
