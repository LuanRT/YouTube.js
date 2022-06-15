const Simplify = require('../parser/simplify');
const Feed = require('./Feed');

class Playlist extends Feed {
    #client;
    constructor(session, data, client) {
        super(session, data);
        this.#client = client;
    }

    /**
     * @returns {import('../parser/contents/PlaylistSidebarPrimaryInfo') | undefined}
     */
    getPrimaryInfo() {
        return Simplify.matching({
            type: 'PlaylistSidebarPrimaryInfo',
        }).runOn(this.page)[0];
    }

    #getStat(index) {
        const primaryInfo = this.getPrimaryInfo();
        if (!primaryInfo || !primaryInfo.stats)
            return 'N/A';
        return primaryInfo.stats[index]?.toString() || 'N/A';
    }

    get title() {
        const primaryInfo = this.getPrimaryInfo();
        if (!primaryInfo)
            return '';
        return primaryInfo.title.toString();
    }

    get description() {
        const primaryInfo = this.getPrimaryInfo();
        if (!primaryInfo)
            return '';
        return primaryInfo.description.toString();
    }

    get total_items() {
        return this.#getStat(0);
    }

    get views() {
        return this.#getStat(1);
    }

    get last_updated() {
        return this.#getStat(2);
    }

    /**
     * @alias videos
     */
    get items () {
        return this.videos;
    }

    async getContinuation() {
        return new Playlist(this.session, await this.getContinuationData(), this.#client);
    }
}

module.exports = Playlist;
