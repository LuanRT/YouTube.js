export class Trending {
    constructor(session: any, data: any);
    /**
     *
     * @param {string} title title of the tab to get
     * @returns
     */
    getTab(title: string): TrendingTab;
    /**
     * @alias getTab('now')
     */
    get now(): TrendingTab;
    /**
     * @alias getTab('music')
     */
    get music(): TrendingTab;
    get page(): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        metadata: any;
        header: any;
        microformat: any;
        sidebar: any;
        playability_status: {
            status: any;
            embeddable: any;
        };
        streaming_data: {
            expires: Date;
            formats: import("../parser/contents/Format")[];
            adaptive_formats: import("../parser/contents/Format")[];
        };
        captions: any;
        video_details: import("../parser/contents/VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: any;
        cards: any;
    };
    #private;
}
export class TrendingTab {
    /**
     * @param {import('../parser/contents/Tab')} tab
     */
    constructor(session: any, tab: import('../parser/contents/Tab'));
    get title(): string;
    /**
     * @returns {import('../parser/contents/Shelf')[]}
     */
    getShelfs(): import('../parser/contents/Shelf')[];
    getShelf(title: any): any;
    /**
     * @type {{
     *  title: string,
     *  videos: SimpleVideo[]
     * }[] | null}
     */
    get content(): {
        title: string;
        videos: SimpleVideo[];
    }[];
    /**
     * Selects this tab and returns a new TrendingTab with this tab selected
     */
    getSelected(): Promise<TrendingTab>;
    /**
     * @note getVideos returns only the vidoes of the first shelf
     * @returns {SimpleVideo[]}
     */
    getVideos(): SimpleVideo[];
    get raw(): import("../parser/contents/Tab");
    #private;
}
import SimpleVideo = require("./VideoItem");
