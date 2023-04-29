import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Parser from '../index.ts';
import Button from './Button.ts';
import ToggleButton from './ToggleButton.ts';

export default class SegmentedLikeDislikeButton extends YTNode {
  static type = 'SegmentedLikeDislikeButton';

  like_button: ToggleButton | Button | null;
  dislike_button: ToggleButton | Button | null;

  constructor (data: RawNode) {
    super();
    this.like_button = Parser.parseItem(data.likeButton, [ ToggleButton, Button ]);
    this.dislike_button = Parser.parseItem(data.dislikeButton, [ ToggleButton, Button ]);
  }
}