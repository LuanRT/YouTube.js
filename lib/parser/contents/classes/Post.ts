'use strict';

import BackstagePost from './BackstagePost';

class Post extends BackstagePost {
  type = 'Post';

  constructor(data) {
    super(data);
  }
}

export default Post;