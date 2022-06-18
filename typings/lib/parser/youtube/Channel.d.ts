export = Channel;
declare class Channel extends TabbedFeed {
    /**
     * @type {import('../parser/contents/ChannelMetadata')}
     */
    metadata: any;
    title: any;
    description: any;
    getVideos(): Promise<TabbedFeed>;
    getPlaylists(): Promise<TabbedFeed>;
    getHome(): Promise<TabbedFeed>;
    getCommunity(): Promise<TabbedFeed>;
    getChannels(): Promise<TabbedFeed>;
    /**
     * Get the channel about page
     *
     * @returns {Promise<import('../parser/contents/ChannelAboutFullMetadata')>}
     */
    getAbout(): Promise<any>;
}
import TabbedFeed = require("../../core/TabbedFeed");
