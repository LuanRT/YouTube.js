const Simplify = require("../parser/simplify");
const { InnertubeError } = require("../utils/Utils");
const Feed = require("./Feed");

class HomeFeed extends Feed {
    /**
     * @type {import('../parser/contents/ChipCloudChip')[]}
     */
    #chips;
    constructor(session, data) {
        super(session, data)
    }

    /**
     * Get filters for the home feed
     * @returns {import('../parser/contents/ChipCloudChip')[]}
     */
    getFeedFilters() {
        if (this.#chips) return this.#chips;

        const chipbars = Simplify.matching({
            type: 'FeedFilterChipBar',
        }).runOn(this.page);

        if (chipbars.length > 1) 
            throw new InnertubeError('There are too many feed filter chipbars, you\'ll need to find the correct one yourself in this.page');
        if (chipbars.length === 0)
            throw new InnertubeError('There are no feed filter chipbars');
        const chipbar = chipbars[0];

        this.#chips = Simplify.matching({
            type: 'ChipCloudChip'
        }).runOn(chipbar);

        return this.getFeedFilters();
    }

    async getContinuation() {
        return new HomeFeed(this.session, await this.getContinuationData());
    }
}

module.exports = HomeFeed;
