import Parser from '../index.js';
import ToggleButton from './ToggleButton.js';
import { YTNode } from '../helpers.js';

class SegmentedLikeDislikeButton extends YTNode {
  static type = 'SegmentedLikeDislikeButton';

  like_button: ToggleButton | null;
  dislike_button: ToggleButton | null;

  constructor (data: any) {
    super();
    this.like_button = Parser.parseItem<ToggleButton>(data.likeButton, ToggleButton);
    this.dislike_button = Parser.parseItem<ToggleButton>(data.dislikeButton, ToggleButton);
  }
}

export default SegmentedLikeDislikeButton;