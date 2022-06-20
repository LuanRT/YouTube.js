export = FilterableFeed;
declare class FilterableFeed extends Feed {
    /**
     * Get filters for the feed
     *
     * @returns {import('../parser/contents/ChipCloudChip')[]}
     */
    get filter_chips(): any[];
    get filters(): any[];
    /**
     * Applies given filter and returns a new {@link Feed} object.
     *
     * @param {string | import('../parser/contents/classes/ChipCloudChip')} filter
     * @returns {Promise.<Feed>}
     */
    getFilteredFeed(filter: string | import('../parser/contents/classes/ChipCloudChip')): Promise<Feed>;
    #private;
}
import Feed = require("./Feed");
