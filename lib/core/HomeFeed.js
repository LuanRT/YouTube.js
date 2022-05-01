const ResultsParser = require("../parser/contents");
const Simplify = require("../parser/simplify");
const { InnertubeError } = require("../utils/Utils");
const Utils = require("../utils/Utils");

class HomeFeed {
    #page;
    /**
     * @type {import('../parser/contents/ContinuationItem')[]}
     */
    #continuation;
    /**
     * @type {import('../parser/contents/ChipCloudChip')[]}
     */
    #chips;
    #session;
    constructor(session, data) {
        if (data.on_response_received_actions)
            this.#page = data;
        else
            this.#page = ResultsParser.parseResponse(data);
        this.#session = session;
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
        return Simplify.matching({
            type: Simplify.matching(/^Video$/),
        }).runOn(this.#page);
    }

    /**
     * Get filters for the home feed
     * @returns {import('../parser/contents/ChipCloudChip')[]}
     */
    getFeedFilters() {
        if (this.#chips) return this.#chips;

        const chipbars = Simplify.matching({
            type: Simplify.matching(/^FeedFilterChipBar$/),
        }).runOn(this.#page);

        if (chipbars.length > 1) 
            throw new InnertubeError('There are too many feed filter chipbars, you\'ll need to find the correct one yourself in this.page');
        if (chipbars.length === 0)
            throw new InnertubeError('There are no feed filter chipbars');
        const chipbar = chipbars[0];

        this.#chips = Simplify.matching({
            type: Simplify.matching(/^ChipCloudChip$/),
        }).runOn(chipbar);

        return this.getFeedFilters();
    }

    /**
     * Get all the videos in the home feed
     * @deprecated Use getVideos instead
     */
    get videos() {
        const simplified = this.getVideos();

        return simplified.map(video => {
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
    }

    async getContinuation() {
        if (this.#continuation) {
            if (this.#continuation.length > 1) 
                throw new InnertubeError('There are too many continuations, you\'ll need to find the correct one yourself in this.page');
            if (this.#continuation.length === 0)
                throw new InnertubeError('There are no continuations');
            const continuation = this.#continuation[0];
            const response = await continuation.call(this.#session);
            
            return new HomeFeed(this.#session, response.response);
        }

        this.#continuation = Simplify.matching({
            type: Simplify.matching(/^ContinuationItem$/),
        }).runOn(this.#page);

        if (this.#continuation) 
            return this.getContinuation();
        
        return;
    }
}

module.exports = HomeFeed;
