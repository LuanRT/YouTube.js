const ResultsParser = require("../parser/contents");
const Simplify = require("../parser/simplify");
const { InnertubeError } = require("../utils/Utils");
const Feed = require("./Feed");
const SimpleVideo = require("./SimpleVideo");

class Channel {
    #page;
    #session;
    constructor(session, data) {
        this.#session = session;
        this.#page = ResultsParser.parseResponse(data);
    }

    get page() {
        return this.#page;
    }

    get title() {
        return this.metadata.title || '';
    }

    get description() {
        return this.metadata.description || '';
    }

    /**
     * @type {import('../parser/contents/ChannelMetadata')}
     */
    get metadata() {
        return this.#page.metadata;
    }

    /**
     * 
     * @returns {import('../parser/contents/Tab')[]}
     */
    getTabs() {
        return Simplify.matching({
            type: Simplify.matching(/^Tab$/),
        }).runOn(this.#page);
    }

    /**
     * 
     * @param {string} name 
     * @returns {import('../parser/contents/Tab')}
     */
    getTab(name) {
        return Simplify.matching({
            type: Simplify.matching(/^Tab$/),
            title: Simplify.matching(new RegExp('^' + name + '$', 'i')),
        }).runOn(this.#page)[0];
    }

    // TODO: this assumes that the Channel contains a populated Home tab
    #getHomePageVideos() {
        const tab = this.getTab('Home');
        /**
         * @type {import('../parser/contents/Shelf')[]}
         */
        const shelfs = Simplify.matching({
            type: Simplify.matching(/^Shelf$/),
        }).runOn(tab);
        return shelfs.map(shelf => {
            return {
                title: shelf.title.toString(),
                content: Simplify.matching({
                    type: Simplify.matching(SimpleVideo.regex),
                }).runOn(shelf).map(video => new SimpleVideo(video)),
            }
        });
    }

    async getFeedFromTab(tab) {
        const target_tab = this.getTab(tab);
        if (!target_tab)
            throw new InnertubeError('Unable to locate "' + tab + '" tab');
        if (target_tab.selected)
            return new Feed(this.#session, this.page);
        const response = await target_tab.endpoint.call(this.#session);
        if (!response.success)
            throw new InnertubeError('Failed to get page', response);
        return new Feed(this.#session, response.data);
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

    /**
     * @note home_page only returns videos!
     * @deprecated use getXXX family of functions instead
     */
    get content() {
        return {
            home_page: this.#getHomePageVideos(),
            getHome: this.getHome.bind(this),
            getVideos: this.getVideos.bind(this),
            getPlaylists: this.getPlaylists.bind(this),
            getCommunity: this.getCommunity.bind(this),
            getChannels: () => {},
            getAbout: () => {}
        }
    }
}

module.exports = Channel;