import Parser from '../../index';
import { YTNode } from '../../helpers';

class CommentActionButtons extends YTNode {
  static type = 'CommentActionButtons';

  like_button;
  dislike_button;
  reply_button;

  constructor(data: any) {
    super();
    this.like_button = Parser.parse(data.likeButton);
    this.dislike_button = Parser.parse(data.dislikeButton);
    this.reply_button = Parser.parse(data.replyButton);
  }
}

export default CommentActionButtons;