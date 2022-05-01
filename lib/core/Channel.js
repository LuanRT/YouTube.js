const ResultsParser = require("../parser/contents");
const Simplify = require("../parser/simplify");
const SimpleVideo = require("./SimpleVideo");

class Channel {
    #page;
    #session;
    constructor(session, data) {
        this.#session = session;
        this.#page = ResultsParser.parseResponse(data);
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
            getVideos: () => {},
            getPlaylists: () => {},
            getCommunity: () => {},
            getChannels: () => {},
            getAbout: () => {}
        }
    }
}

module.exports = Channel;