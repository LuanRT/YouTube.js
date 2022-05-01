export = HomeFeed;
declare class HomeFeed {
    constructor(session: any, data: any);
    /**
     * Get the original page data
     */
    get page(): any;
    /**
     * Get all the videos in the home feed
     * @returns {Array<import('../parser/contents/Video')>}
     */
    getVideos(): Array<import('../parser/contents/Video')>;
    /**
     * Get filters for the home feed
     * @returns {import('../parser/contents/ChipCloudChip')[]}
     */
    getFeedFilters(): import('../parser/contents/ChipCloudChip')[];
    /**
     * Get all the videos in the home feed
     * @deprecated Use getVideos instead
     */
    get videos(): {
        id: string;
        title: any;
        description: string;
        channel: {
            id: any;
            name: string;
            url: any;
            thumbnail: import("../parser/contents/Thumbnail");
            is_verified: boolean;
            is_verified_artist: boolean;
        };
        metadata: {
            view_count: any;
            short_view_count_text: {
                simple_text: any;
                accessibility_label: string;
            };
            thumbnail: import("../parser/contents/Thumbnail");
            thumbnails: import("../parser/contents/Thumbnail")[];
            moving_thumbnail: {};
            moving_thumbnails: import("../parser/contents/Thumbnail")[];
            published: any;
            duration: {
                seconds: number;
                simple_text: string;
                accessibility_label: string;
            };
            badges: import("../parser/contents/MetadataBadge")[];
            owner_badges: import("../parser/contents/MetadataBadge")[];
        };
    }[];
    getContinuation(): any;
    #private;
}
