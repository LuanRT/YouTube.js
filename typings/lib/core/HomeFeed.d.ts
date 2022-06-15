export = HomeFeed;
declare class HomeFeed extends Feed {
    constructor(session: any, data: any);
    /**
     * Get filters for the home feed
     * @returns {import('../parser/contents/ChipCloudChip')[]}
     */
    getFeedFilters(): import('../parser/contents/ChipCloudChip')[];
    getContinuation(): Promise<HomeFeed>;
    #private;
}
import Feed = require("./Feed");
