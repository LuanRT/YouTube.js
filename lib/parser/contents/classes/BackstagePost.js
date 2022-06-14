const Parser = require('..');
const Author = require('./Author');
const Text = require('./Text');

class BackstagePost {
  type = 'BackstagePost';

  constructor(data) {
    this.id = data.postId;
    this.author = new Author({
      ...data.authorText,
      navigationEndpoint: data.authorEndpoint
    }, null, data.authorThumbnail);
    this.content = new Text(data.contentText, '');
    this.published_at = new Text(data.publishedTimeText);
    this.likes = new Text(data.voteCount);
    this.actions = Parser.parse(data.actionButtons);
    this.attachment = data.backstageAttachment ? Parser.parse(data.backstageAttachment) : null;
  }

  get endpoint() {
    return this.actions.reply.endpoint;
  }
}

module.exports = BackstagePost;