import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ThumbnailOverlayTitleView extends YTNode {
  static type = 'ThumbnailOverlayTitleView';

  public title: string;
  public subtitle: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title?.content ?? '';
    this.subtitle = data.subtitle?.content ?? '';
  }
}
