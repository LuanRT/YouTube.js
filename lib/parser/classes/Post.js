import BackstagePost from "./BackstagePost.js";

import { YTNode } from "..";

class Post extends BackstagePost extends YTNode {
    static type = 'Post';
    constructor(data) {
        super();
        super(data);
    }
}
export default Post;
