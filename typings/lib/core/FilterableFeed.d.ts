export = FilterableFeed;
declare class FilterableFeed extends Feed {
    /**
     * Get filters for the feed
     *
     * @returns {import('../parser/contents/ChipCloudChip')[]}
     */
    get filter_chips(): any[];
    get filters(): any[];
    getFilteredFeed(name: any): Promise<Feed>;
    #private;
}
import Feed = require("./Feed");
