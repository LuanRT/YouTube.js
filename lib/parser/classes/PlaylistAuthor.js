import Author from "./misc/Author.js";

import { YTNode } from "..";

class PlaylistAuthor extends Author extends YTNode {
    static #type = Symbol('PlaylistAuthor');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
        delete this.badges;
        delete this.is_verified;
        delete this.is_verified_artist;
    }
}
export default PlaylistAuthor;
