const Feed = require('./Feed');

class Playlist extends Feed {
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        this.primary_info = this.memo.get('PlaylistSidebarPrimaryInfo')?.[0];
    }

    #getStat(index) {
        if (!this.primary_info || !this.primary_info.stats)
            return 'N/A';
        return this.primary_info.stats[index]?.toString() || 'N/A';
    }

    get title() {
        if (!this.primary_info)
            return '';
        return this.primary_info.title.toString();
    }

    get description() {
        if (!this.primary_info)
            return '';
        return this.primary_info.description.toString();
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
}

module.exports = Playlist;
