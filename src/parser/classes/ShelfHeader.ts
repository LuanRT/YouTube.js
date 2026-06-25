import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import AvatarLockup from './AvatarLockup.js';

export default class ShelfHeader extends YTNode {
  static type = 'ShelfHeader';

  avatar_lockup: AvatarLockup | null;

  constructor(data: RawNode) {
    super();
    this.avatar_lockup = Parser.parseItem(data.avatarLockup, AvatarLockup);
  }
}