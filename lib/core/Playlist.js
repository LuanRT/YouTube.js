const Feed = require("./Feed");

class Playlist extends Feed {
    #client;
    constructor(session, data, client) {
        super(session, data);
        this.#client = client;
    }

    async getContinuation() {
        return new Playlist(this.session, await this.getContinuationData(), this.#client);
    }
}

module.exports = Playlist;
