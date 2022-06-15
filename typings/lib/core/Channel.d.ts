export = Channel;
declare class Channel {
    constructor(session: any, data: any);
    get page(): {
        contents: any;
        on_response_received_actions: any;
        on_response_received_endpoints: any;
        on_response_received_commands: any;
        continuation_contents: any;
        metadata: any;
        header: any;
        microformat: import("../parser/contents/classes/PlayerMicroformat");
        sidebar: any;
        overlay: any;
        refinements: any;
        estimated_results: any;
        player_overlays: any;
        playability_status: {
            status: number;
            error_screen: any;
            embeddable: boolean;
            reason: string;
        };
        streaming_data: {
            expires: Date;
            formats: import("../parser/contents/classes/Format")[];
            adaptive_formats: import("../parser/contents/classes/Format")[];
            dash_manifest_url: any;
            dls_manifest_url: any;
        };
        captions: any;
        video_details: import("../parser/contents/classes/VideoDetails");
        annotations: any;
        storyboards: any;
        endscreen: import("../parser/contents/classes/Endscreen");
        cards: import("../parser/contents/classes/CardCollection");
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
