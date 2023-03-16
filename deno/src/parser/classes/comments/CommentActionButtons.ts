import Parser from '../../index.ts';
import Button from '../Button.ts';
import ToggleButton from '../ToggleButton.ts';
import CreatorHeart from './CreatorHeart.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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