import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class ThumbnailOverlayProgressBarView extends YTNode {
  static type = 'ThumbnailOverlayProgressBarView';

  public start_percent: number;

  constructor(data: RawNode) {
    super();
    this.start_percent = data.startPercent;
  }
}