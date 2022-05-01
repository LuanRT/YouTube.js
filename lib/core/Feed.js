const ResultsParser = require('../parser/contents');
const Simplify = require('../parser/simplify');
const SimpleVideo = require('./SimpleVideo');

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
        if (data.on_response_received_actions)
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
     * Get unified list of videos
     * @returns {SimpleVideo[]}
     */
    get videos() {
        const simplified = this.getVideos();

        return simplified.map(video => new SimpleVideo(video));
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
