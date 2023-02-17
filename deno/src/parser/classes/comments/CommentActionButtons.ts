import Parser from '../../index.ts';
import type Button from '../Button.ts';
import type ToggleButton from '../ToggleButton.ts';
import type CreatorHeart from './CreatorHeart.ts';
import { YTNode } from '../../helpers.ts';

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