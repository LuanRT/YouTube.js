const ResultsParser = require('../parser/contents');
const { InnertubeError } = require('../utils/Utils');
const Feed = require('./Feed');

class Channel {
    #page;
    #actions;

    /**
     * @type {import('../parser/contents/ChannelMetadata')}
     */
    metadata;

    constructor(data, actions) {
        this.#actions = actions;
        this.#page = ResultsParser.parseResponse(data);
        this.metadata = this.#page.metadata;
        this.title = this.metadata.title || '';
        this.description = this.metadata.description || '';
    }

    get page() {
        return this.#page;
    }

    /**
     * 
     * @returns {import('../parser/contents/Tab')[]}
     */
    getTabs() {
        return this.#page.contents_memo.get('Tab');
    }

    /**
     * 
     * @param {string} name 
     * @returns {import('../parser/contents/Tab')}
     */
    getTab(name) {
        return this.#page.contents_memo.get('Tab')?.find(tab => tab.title.toString().toLowerCase() === name.toLowerCase());
    }

    async getFeedFromTab(tab) {
        const target_tab = this.getTab(tab);
        if (!target_tab)
            throw new InnertubeError('Unable to locate "' + tab + '" tab');
        if (target_tab.selected)
            return new Feed(this.#actions, this.page, true);
        const response = await target_tab.endpoint.call(this.#actions);
        return new Feed(this.#actions, response, true);
    }

    getVideos() {
        return this.getFeedFromTab('Videos');
    }
    
    getPlaylists() {
        return this.getFeedFromTab('Playlists');
    }

    getHome() {
        return this.getFeedFromTab('Home');
    }

    getCommunity() {
        return this.getFeedFromTab('Community');
    }

    getChannels() {
        return this.getFeedFromTab('Channels');
    }

    /**
     * Get the channel about page
     * @returns {Promise<import('../parser/contents/ChannelAboutFullMetadata')>}
     */
    async getAbout() {
        const target_tab = this.getTab('About');
        if (!target_tab)
            throw new InnertubeError('Unable to locate "About" tab');
        if (target_tab.selected)
            return this.#page.contents_memo.get('ChannelAboutFullMetadata')?.[0];
        const response = await target_tab.endpoint.call(this.#actions);
        if (!response.success)
            throw new InnertubeError('Failed to get page', response);
        const parsed = ResultsParser.parseResponse(response.data);
        return parsed.contents_memo.get('ChannelAboutFullMetadata')?.[0];
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