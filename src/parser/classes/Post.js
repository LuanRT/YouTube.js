import BackstagePost from './BackstagePost';

class Post extends BackstagePost {
  static type = 'Post';
  constructor(data) {
    super(data);
  }
}
export default Post;
