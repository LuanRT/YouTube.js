const ResultsParser = require('../parser/contents');
const Simplify = require('../parser/simplify');
const { InnertubeError } = require('../utils/Utils');
const SimplePlaylist = require('./SimplePlaylist');
const SimpleVideo = require('./SimpleVideo');

// TODO: add a way subdivide into sections and return subfeeds?

class Feed {
    #page;
    /**
     * @type {import('../parser/contents/ContinuationItem')[]}
     */
    #continuation;
    /**
     * @type {import('../Innertube')}
     */
    #session;
    constructor(session, data) {
        if (data.on_response_received_actions || data.on_response_received_endpoints)
            this.#page = data;
        else
            this.#page = ResultsParser.parseResponse(data);
        this.#session = session;
    }


    /**
     * Get the original page data
     */
    get page() {
        return this.#page;
    }

    get session() {
        return this.#session;
    }

    /**
     * Get all the videos in the feed
     * @returns {Array<import('../parser/contents/Video') | import('../parser/contents/GridVideo') | import('../parser/contents/CompactVideo') | import('../parser/contents/PlaylistVideo') | import('../parser/contents/PlaylistPanelVideo')>}
     */
    getVideos() {
        return Simplify.matching({
            type: Simplify.matching(SimpleVideo.regex),
        }).runOn(this.#page);
    }

    /**
     * Get all playlists in the feed
     * @returns {Array<import('../parser/contents/Playlist') | import('../parser/contents/GridPlaylist')>}
     */
    getPlaylists() {
        return Simplify.matching({
            type: Simplify.matching(SimplePlaylist.regex),
        }).runOn(this.#page);
    }

    /**
     * Get all the community posts in the feed
     * @returns {import('../parser/contents/BackstagePost')[]}
     */
    getBackstagePosts() {
        return Simplify.matching({
            type: Simplify.matching(/^BackstagePost$/),
        }).runOn(this.#page);
    }

    /**
     * Get all the channels in the feed
     * @returns {Array<import('../parser/contents/Channel') | import('../parser/contents/GridChannel')>}
     */
    getChannels() {
        return Simplify.matching({
            type: Simplify.matching(/^(Channel|GridChannel)$/),
        }).runOn(this.#page);
    }

    /**
     * Get unified list of videos
     * @returns {SimpleVideo[]}
     */
    get videos() {
        const simplified = this.getVideos();

        return simplified.map(video => new SimpleVideo(video));
    }

    /**
     * Get unified list of playlists
     * @returns {SimplePlaylist[]}
     */
    get playlists() {
        const simplified = this.getPlaylists();

        return simplified.map(playlist => new SimplePlaylist(playlist));
    }

    get channels() {
        // XXX: Channel and GridChannel is so similar we don't need to do anything special
        return this.getChannels();
    }

    /**
     * Get a list of community posts
     */
    get backstage_posts() {
        return this.getBackstagePosts();
    }

    get has_continuation() {
        return Simplify.matching({
            type: Simplify.matching(/^ContinuationItem$/),
        }).runOn(this.#page).length > 0;
    }

    async getContinuationData() {
        if (this.#continuation) {
            if (this.#continuation.length > 1) 
                throw new InnertubeError('There are too many continuations, you\'ll need to find the correct one yourself in this.page');
            if (this.#continuation.length === 0)
                throw new InnertubeError('There are no continuations');
            const continuation = this.#continuation[0];
            const response = await continuation.call(this.#session);
            
            return response.response;
        }

        this.#continuation = Simplify.matching({
            type: Simplify.matching(/^ContinuationItem$/),
        }).runOn(this.#page);

        if (this.#continuation) 
            return this.getContinuationData();
        
        return;
    }

    async getContinuation() {
        return new Feed(this.session, await this.getContinuationData());
    }
}

module.exports = Feed;
