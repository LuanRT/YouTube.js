import Parser from '../../index.ts';
import Button from '../Button.ts';
import ToggleButton from '../ToggleButton.ts';
import CreatorHeart from './CreatorHeart.ts';

import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class CommentActionButtons extends YTNode {
  static type = 'CommentActionButtons';

  like_button: ToggleButton | null;
  dislike_button: ToggleButton | null;
  reply_button: Button | null;
  creator_heart: CreatorHeart | null;

  constructor(data: RawNode) {
    super();
    this.like_button = Parser.parseItem(data.likeButton, ToggleButton);
    this.dislike_button = Parser.parseItem(data.dislikeButton, ToggleButton);
    this.reply_button = Parser.parseItem(data.replyButton, Button);
    this.creator_heart = Parser.parseItem(data.creatorHeart, CreatorHeart);
  }
}