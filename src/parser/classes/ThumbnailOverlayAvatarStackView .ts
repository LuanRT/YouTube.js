import { Parser, RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import AvatarStackView from './AvatarStackView.js';

export default class ThumbnailOverlayAvatarStackView extends YTNode {
  static type = 'ThumbnailOverlayAvatarStackView';

  avatar_stack: AvatarStackView | null;

  constructor(data: RawNode) {
    super();
    this.avatar_stack = Parser.parseItem(data.avatarStack, AvatarStackView);
  }
}