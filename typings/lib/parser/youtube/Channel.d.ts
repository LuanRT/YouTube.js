export = Channel;
declare class Channel extends TabbedFeed {
    header: {
        author: any;
        subscribers: any;
        banner: any;
        tv_banner: any;
        mobile_banner: any;
        header_links: any;
    };
    metadata: any;
    sponsor_button: any;
    subscribe_button: any;
    current_tab: any;
    getVideos(): Promise<Channel>;
    getPlaylists(): Promise<Channel>;
    getHome(): Promise<Channel>;
    getCommunity(): Promise<Channel>;
    getChannels(): Promise<Channel>;
    /**
     * Retrieves the channel about page.
     * Note that this does not return a new {@link Channel} object.
     *
     * @returns {Promise<import('../parser/contents/ChannelAboutFullMetadata')>}
     */
    getAbout(): Promise<any>;
    #private;
}
import TabbedFeed = require("../../core/TabbedFeed");
