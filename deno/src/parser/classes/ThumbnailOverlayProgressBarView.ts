import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';

export default class ThumbnailOverlayProgressBarView extends YTNode {
  static type = 'ThumbnailOverlayProgressBarView';

  public start_percent: number;

  constructor(data: RawNode) {
    super();
    this.start_percent = data.startPercent;
  }
}