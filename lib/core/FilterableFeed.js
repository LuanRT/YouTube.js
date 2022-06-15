const { InnertubeError } = require('../utils/Utils');
const Feed = require('./Feed');

class FilterableFeed extends Feed {
    /**
     * @type {import('../parser/contents/ChipCloudChip')[]}
     */
    #chips;
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed)
    }

    /**
     * Get filters for the feed
     *
     * @returns {import('../parser/contents/ChipCloudChip')[]}
     */
    get filter_chips() {
        if (this.#chips) return this.#chips || [];

        if (this.memo.get('FeedFilterChipBar')?.length > 1) 
            throw new InnertubeError('There are too many feed filter chipbars, you\'ll need to find the correct one yourself in this.page');
        if (this.memo.get('FeedFilterChipBar')?.length === 0)
            throw new InnertubeError('There are no feed filter chipbars');

        this.#chips = this.memo.get('ChipCloudChip') || [];

        return this.#chips || [];
    }

    get filters() {
        return this.filter_chips.map(chip => chip.text.toString()) || [];
    }

    async getFilteredFeed(name) {
        if (!this.filters.includes(name))
            throw new InnertubeError('Invalid filter', { available_filters: this.filters });
        
        const filter = this.filter_chips.find(chip => chip.text.toString() === name);

        if (filter.is_selected) return this;

        const response = await filter.endpoint.call(this.actions);

        return new Feed(this.actions, response, true);
    }
}

module.exports = FilterableFeed;