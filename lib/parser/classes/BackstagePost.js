import Parser from '../index';
import Author from './misc/Author';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class BackstagePost extends YTNode {
  static type = 'BackstagePost';
  constructor(data) {
    super();
    this.id = data.postId;
    this.author = new Author({
      ...data.authorText,
      navigationEndpoint: data.authorEndpoint
    }, null, data.authorThumbnail);
    this.content = new Text(data.contentText, '');
    this.published = new Text(data.publishedTimeText);
    this.poll_status = data.pollStatus;
    this.vote_status = data.voteStatus;
    this.likes = new Text(data.voteCount);
    this.menu = Parser.parse(data.actionMenu) || null;
    this.actions = Parser.parse(data.actionButtons);
    this.vote_button = Parser.parse(data.voteButton);
    this.surface = data.surface;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.attachment = Parser.parse(data.backstageAttachment) || null;
  }
}
export default BackstagePost;
