export = Channel;
declare class Channel {
    constructor(session: any, data: any);
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
    get title(): any;
    get description(): any;
    /**
     * @type {import('../parser/contents/ChannelMetadata')}
     */
    get metadata(): import("../parser/contents/ChannelMetadata");
    /**
     *
     * @returns {import('../parser/contents/Tab')[]}
     */
    getTabs(): import('../parser/contents/Tab')[];
    /**
     *
     * @param {string} name
     * @returns {import('../parser/contents/Tab')}
     */
    getTab(name: string): import('../parser/contents/Tab');
    getFeedFromTab(tab: any): Promise<Feed>;
    getVideos(): Promise<Feed>;
    getPlaylists(): Promise<Feed>;
    getHome(): Promise<Feed>;
    getCommunity(): Promise<Feed>;
    getChannels(): Promise<Feed>;
    /**
     * Get the channel about page
     * @returns {Promise<import('../parser/contents/ChannelAboutFullMetadata')>}
     */
    getAbout(): Promise<import('../parser/contents/ChannelAboutFullMetadata')>;
    /**
     * @note home_page only returns videos!
     * @deprecated use getXXX family of functions instead
     */
    get content(): {
        home_page: {
            title: string;
            content: any;
        }[];
        getHome: any;
        getVideos: any;
        getPlaylists: any;
        getCommunity: any;
        getChannels: any;
        getAbout: any;
    };
    #private;
}
import Feed = require("./Feed");
