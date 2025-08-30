import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class ThumbnailOverlayStackingEffect extends YTNode {
  static type = 'ThumbnailOverlayStackingEffect';

  upper_stack_color: number;
  lower_stack_color: number;

  constructor(data: RawNode) {
    super();
    this.upper_stack_color = data.upperStackColor;
    this.lower_stack_color = data.lowerStackColor;
  }
}