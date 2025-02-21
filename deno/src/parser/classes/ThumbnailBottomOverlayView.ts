import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ThumbnailBadgeView from './ThumbnailBadgeView.ts';
import ThumbnailOverlayProgressBarView from './ThumbnailOverlayProgressBarView.ts';

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