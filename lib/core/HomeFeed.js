const ResultsParser = require("../parser/contents");
const Simplify = require("../parser/simplify");
const { InnertubeError } = require("../utils/Utils");
const Utils = require("../utils/Utils");
const SimpleVideo = require("./SimpleVideo");

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
     * @returns {Array<import('../parser/contents/Video') | import('../parser/contents/GridVideo') | import('../parser/contents/CompactVideo') | import('../parser/contents/PlaylistVideo') | import('../parser/contents/PlaylistPanelVideo')>}
     */
    getVideos() {
        return Simplify.matching({
            type: Simplify.matching(SimpleVideo.regex),
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
     * @returns {SimpleVideo[]}
     */
    get videos() {
        const simplified = this.getVideos();

        return simplified.map(video => new SimpleVideo(video));
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
