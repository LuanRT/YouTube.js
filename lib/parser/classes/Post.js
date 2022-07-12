import BackstagePost from "./BackstagePost.js";

import { YTNode } from "..";

class Post extends BackstagePost extends YTNode {
    static #type = Symbol('Post');
    static get type() { return this.#type }
    constructor(data) {
        super();
        super(data);
    }
}
export default Post;
