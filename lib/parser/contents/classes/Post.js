'use strict';

const BackstagePost = require('./BackstagePost');

class Post extends BackstagePost {
  type = 'Post';
  
  constructor(data) {
    super(data);
  }
}

module.exports = Post;