import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import { YTNode } from '../helpers.ts';
import AvatarStackView from './AvatarStackView.ts';

export default class ThumbnailOverlayAvatarStackView extends YTNode {
  static type = 'ThumbnailOverlayAvatarStackView';

  avatar_stack: AvatarStackView | null;

  constructor(data: RawNode) {
    super();
    this.avatar_stack = Parser.parseItem(data.avatarStack, AvatarStackView);
  }
}