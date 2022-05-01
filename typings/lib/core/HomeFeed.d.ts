export = HomeFeed;
declare class HomeFeed {
    constructor(data: any);
    /**
     * Get the original page data
     */
    get page(): {
        contents: any;
    };
    /**
     * Get all the videos in the home feed
     * @returns {Array<import('../parser/contents/Video')>}
     */
    getVideos(): Array<import('../parser/contents/Video')>;
    /**
     * Get all the videos in the home feed
     * @deprecated Use getVideos instead
     */
    get videos(): any;
    getContinuation(): void;
    #private;
}
