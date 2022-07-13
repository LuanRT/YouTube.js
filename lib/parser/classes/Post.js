import BackstagePost from "./BackstagePost.js";

import { YTNode } from "../helpers";

class Post extends BackstagePost {
    static type = 'Post';
    constructor(data) {
        super();
        super(data);
    }
}
export default Post;
