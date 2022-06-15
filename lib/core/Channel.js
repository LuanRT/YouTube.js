const { InnertubeError } = require('../utils/Utils');
const TabbedFeed = require('./TabbedFeed');

class Channel extends TabbedFeed {
    /**
     * @type {import('../parser/contents/ChannelMetadata')}
     */
    metadata;

    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        this.metadata = this.page.metadata;
        this.title = this.metadata.title || '';
        this.description = this.metadata.description || '';
    }

    getVideos() {
        return this.getTab('Videos');
    }
    
    getPlaylists() {
        return this.getTab('Playlists');
    }

    getHome() {
        return this.getTab('Home');
    }

    getCommunity() {
        return this.getTab('Community');
    }

    getChannels() {
        return this.getTab('Channels');
    }

    /**
     * Get the channel about page
     *
     * @returns {Promise<import('../parser/contents/ChannelAboutFullMetadata')>}
     */
    async getAbout() {
        const target_tab = await this.getTab('About');
        return target_tab.memo.get('ChannelAboutFullMetadata')?.[0];
    }

    /**
     * @note home_page only returns videos!
     * @deprecated use getXXX family of functions instead
     */
    get content() {
        return {
            home_page: () => {
                // XXX: this is v1 specific
                //      should it still be supported?
                throw new InnertubeError('Not supported after v1');
            },
            getHome: this.getHome.bind(this),
            getVideos: this.getVideos.bind(this),
            getPlaylists: this.getPlaylists.bind(this),
            getCommunity: this.getCommunity.bind(this),
            getChannels: this.getChannels.bind(this),
            getAbout: this.getAbout.bind(this),
        }
    }
}

module.exports = Channel;