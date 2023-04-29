import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ThumbnailOverlayPinking extends YTNode {
  static type = 'ThumbnailOverlayPinking';

  hack: boolean;

  constructor(data: RawNode) {
    super();
    this.hack = data.hack;
  }
}