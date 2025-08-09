import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ThumbnailBadgeView from './ThumbnailBadgeView.js';

export default class ThumbnailOverlayBadgeView extends YTNode {
  static type = 'ThumbnailOverlayBadgeView';

  public badges: ObservedArray<ThumbnailBadgeView>;
  public position: string;

  constructor(data: RawNode) {
    super();

    this.badges = Parser.parseArray(data.thumbnailBadges, ThumbnailBadgeView);
    this.position = data.position;
  }
}