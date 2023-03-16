import Parser from '../index.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import CommentActionButtons from './comments/CommentActionButtons.ts';
import Menu from './menus/Menu.ts';

import { YTNode } from '../helpers.ts';

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
      this.menu = Parser.parseItem(data.actionMenu, Menu);
    }

    if (data.actionButtons) {
      this.action_buttons = Parser.parseItem(data.actionButtons, CommentActionButtons);
    }

    if (data.voteButton) {
      this.vote_button = Parser.parseItem(data.voteButton, CommentActionButtons);
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