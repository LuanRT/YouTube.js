import Parser from '../index.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type CommentActionButtons from './comments/CommentActionButtons.js';
import type Menu from './menus/Menu.js';

import { YTNode } from '../helpers.js';

class BackstagePost extends YTNode {
  static type = 'BackstagePost';

  id: string;
  author: Author;
  content: Text;
  published: Text;
  poll_status?: string;
  vote_status?: string;
  vote_count?: Text;
  menu?: Menu | null;
  action_buttons;
  vote_button;
  surface: string;
  endpoint?: NavigationEndpoint;
  attachment;

  constructor(data: any) {
    super();
    this.id = data.postId;

    this.author = new Author({
      ...data.authorText,
      navigationEndpoint: data.authorEndpoint
    }, null, data.authorThumbnail);

    this.content = new Text(data.contentText);
    this.published = new Text(data.publishedTimeText);

    if (data.pollStatus) {
      this.poll_status = data.pollStatus;
    }

    if (data.voteStatus) {
      this.vote_status = data.voteStatus;
    }

    if (data.voteCount) {
      this.vote_count = new Text(data.voteCount);
    }

    if (data.actionMenu) {
      this.menu = Parser.parseItem<Menu>(data.actionMenu);
    }

    if (data.actionButtons) {
      this.action_buttons = Parser.parseItem<CommentActionButtons>(data.actionButtons);
    }

    if (data.voteButton) {
      this.vote_button = Parser.parseItem(data.voteButton);
    }

    if (data.navigationEndpoint) {
      this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }

    if (data.backstageAttachment) {
      this.attachment = Parser.parseItem(data.backstageAttachment);
    }

    this.surface = data.surface;
  }
}

export default BackstagePost;