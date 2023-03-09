import Parser from '../../index.js';
import Button from '../Button.js';
import ToggleButton from '../ToggleButton.js';
import CreatorHeart from './CreatorHeart.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

class CommentActionButtons extends YTNode {
  static type = 'CommentActionButtons';

  like_button;
  dislike_button;
  reply_button;
  creator_heart;

  constructor(data: RawNode) {
    super();
    this.like_button = Parser.parseItem(data.likeButton, ToggleButton);
    this.dislike_button = Parser.parseItem(data.dislikeButton, ToggleButton);
    this.reply_button = Parser.parseItem(data.replyButton, Button);
    this.creator_heart = Parser.parseItem(data.creatorHeart, CreatorHeart);
  }
}

export default CommentActionButtons;