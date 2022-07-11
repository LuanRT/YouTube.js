import BackstagePost from "./BackstagePost.js";

class Post extends BackstagePost {
    type = 'Post';
    constructor(data) {
        super(data);
    }
}
export default Post;
