import Author from "./Author.js";

class PlaylistAuthor extends Author {
    constructor(data) {
        super(data);
        delete this.badges;
        delete this.is_verified;
        delete this.is_verified_artist;
    }
}
export default PlaylistAuthor;
