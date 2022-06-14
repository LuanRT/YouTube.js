const Parser = require('..');
const Author = require('./Author');
const Text = require('./Text');

class BackstagePost {
  type = 'BackstagePost';

  constructor(item) {
    this.id = item.postId;
    this.author = new Author({
      ...item.authorText,
      navigationEndpoint: item.authorEndpoint
    }, null, item.authorThumbnail);
    this.content = new Text(item.contentText, '');
    this.published_at = new Text(item.publishedTimeText);
    this.likes = new Text(item.voteCount);
    this.actions = Parser.parseItem(item.actionButtons);
    this.attachment = item.backstageAttachment ? Parser.parseItem(item.backstageAttachment) : null;
  }

  get endpoint() {
    return this.actions.reply.endpoint;
  }
}

module.exports = BackstagePost;