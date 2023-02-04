import Parser from '../../index.js';
import type Button from '../Button.js';
import type ToggleButton from '../ToggleButton.js';
import type CreatorHeart from './CreatorHeart.js';
import { YTNode } from '../../helpers.js';

class CommentActionButtons extends YTNode {
  static type = 'CommentActionButtons';

  like_button;
  dislike_button;
  reply_button;
  creator_heart;

  constructor(data: any) {
    super();
    this.like_button = Parser.parseItem<ToggleButton>(data.likeButton);
    this.dislike_button = Parser.parseItem<ToggleButton>(data.dislikeButton);
    this.reply_button = Parser.parseItem<Button>(data.replyButton);
    this.creator_heart = Parser.parseItem<CreatorHeart>(data.creatorHeart);
  }
}

export default CommentActionButtons;