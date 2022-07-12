import BackstagePost from "./BackstagePost.js";

import { YTNode, ParserTypeSymbol } from "..";

class Post extends BackstagePost extends YTNode {
    static [ParserTypeSymbol] = 'Post';
    constructor(data) {
        super();
        super(data);
    }
}
export default Post;
