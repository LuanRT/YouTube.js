const TabbedFeed = require('../../core/TabbedFeed');

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
}

module.exports = Channel;