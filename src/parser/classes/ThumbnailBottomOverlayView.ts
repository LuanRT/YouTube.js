import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ThumbnailBadgeView from './ThumbnailBadgeView.js';
import ThumbnailOverlayProgressBarView from './ThumbnailOverlayProgressBarView.js';

export default class ThumbnailBottomOverlayView extends YTNode {
  static type = 'ThumbnailBottomOverlayView';

  public progress_bar: ThumbnailOverlayProgressBarView | null;
  public badges: ObservedArray<ThumbnailBadgeView>;

  constructor(data: RawNode) {
    super();
    this.progress_bar = Parser.parseItem(data.progressBar, ThumbnailOverlayProgressBarView);
    this.badges = Parser.parseArray(data.badges, ThumbnailBadgeView);
  }
}