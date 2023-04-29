import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class MusicMenuItemDivider extends YTNode {
  static type = 'MusicMenuItemDivider';

  // eslint-disable-next-line
  constructor(_data: RawNode) {
    super();
    // XXX: Should check if this ever has any data.
  }
}