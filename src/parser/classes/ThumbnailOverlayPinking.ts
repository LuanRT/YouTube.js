import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ThumbnailOverlayPinking extends YTNode {
  static type = 'ThumbnailOverlayPinking';

  hack: boolean;

  constructor(data: RawNode) {
    super();
    this.hack = data.hack;
  }
}