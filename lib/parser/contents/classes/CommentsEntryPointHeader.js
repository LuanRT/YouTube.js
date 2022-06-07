'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class CommentsEntryPointHeader {
  type = 'commentsEntryPointHeaderRenderer';
  
  constructor(data) {
    this.header = new Text(data.headerText);
    this.comment_count = new Text(data.commentCount);
    this.teaser_avatar = new Thumbnail(data.teaserAvatar || data.simpleboxAvatar).thumbnails;
    this.teaser_content = new Text(data.teaserContent);
    this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
  }
}

module.exports = CommentsEntryPointHeader;