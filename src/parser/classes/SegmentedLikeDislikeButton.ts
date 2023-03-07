import Parser, { YTNodes } from '../index.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

class SegmentedLikeDislikeButton extends YTNode {
  static type = 'SegmentedLikeDislikeButton';

  like_button: YTNodes.ToggleButton | YTNodes.Button | null;
  dislike_button: YTNodes.ToggleButton | YTNodes.Button | null;

  constructor (data: RawNode) {
    super();
    this.like_button = Parser.parseItem<YTNodes.ToggleButton | YTNodes.Button>(data.likeButton, [ YTNodes.ToggleButton, YTNodes.Button ]);
    this.dislike_button = Parser.parseItem<YTNodes.ToggleButton | YTNodes.Button>(data.dislikeButton, [ YTNodes.ToggleButton, YTNodes.Button ]);
  }
}

export default SegmentedLikeDislikeButton;