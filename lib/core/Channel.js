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

    async getVideos() {
        const videos_tab = this.getTab('Videos');
        if (!videos_tab)
            throw new InnertubeError('Unable to locate videos tab');
        if (videos_tab.selected)
            return new Feed(this.#session, this.page);
        const response = await videos_tab.endpoint.call(this.#session);
        if (!response.success)
            throw new InnertubeError('Failed to get videos', response);
        return new Feed(this.#session, response.data);
    }

    /**
     * @note home_page only returns videos!
     * XXX: should some other API be made available to expose the content of the channel
     *      or should I just leave it like this and expect more advanced users
     *      to use the getTab() method and navigate the tabs themselves using 
     *      the Simplify API to extract what they need?
     */
    get content() {
        return {
            home_page: this.#getHomePageVideos(),
            // TODO: 
            getVideos: this.getVideos.bind(this),
            getPlaylists: () => {},
            getCommunity: () => {},
            getChannels: () => {},
            getAbout: () => {}
        }
    }
}

module.exports = Channel;