import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import LikeButton from './LikeButton.js';
import ToggleButton from './ToggleButton.js';

type RatingButton = LikeButton | ToggleButton;

export default class TransportControls extends YTNode {
  static type = 'TransportControls';

  like_button: RatingButton | null;
  dislike_button: ToggleButton | null;

  constructor(data: RawNode) {
    super();

    const buttons = data.buttons || [];
    const like_button = data.likeButton || buttons.find((item: RawNode) =>
      item.type === 'TRANSPORT_CONTROLS_BUTTON_TYPE_LIKE_BUTTON' ||
      item.type === 'TRANSPORT_CONTROLS_BUTTON_TYPE_LIKE')?.button;
    const dislike_button = data.dislikeButton || buttons.find((item: RawNode) =>
      item.type === 'TRANSPORT_CONTROLS_BUTTON_TYPE_DISLIKE_BUTTON' ||
      item.type === 'TRANSPORT_CONTROLS_BUTTON_TYPE_DISLIKE')?.button;

    this.like_button = Parser.parseItem(like_button, [ LikeButton, ToggleButton ]);
    this.dislike_button = Parser.parseItem(dislike_button, ToggleButton);
  }
}
