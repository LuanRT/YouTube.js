import BackstagePost from './BackstagePost.ts';

class Post extends BackstagePost {
  static type = 'Post';

  constructor(data: any) {
    super(data);
  }
}

export default Post;