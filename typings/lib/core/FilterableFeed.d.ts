export = FilterableFeed;
declare class FilterableFeed extends Feed {
    /**
     * Get filters for the feed
     *
     * @returns {import('../parser/classes/ChipCloudChip')[]}
     */
    get filter_chips(): import("../parser/classes/ChipCloudChip")[];
    get filters(): any[];
    /**
     * Applies given filter and returns a new {@link Feed} object.
     *
     * @param {string | import('../parser/classes/ChipCloudChip')} filter
     * @returns {Promise.<Feed>}
     */
    getFilteredFeed(filter: string | import('../parser/classes/ChipCloudChip')): Promise<Feed>;
    #private;
}
import Feed = require("./Feed");
