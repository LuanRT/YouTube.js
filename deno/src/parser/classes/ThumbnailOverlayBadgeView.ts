import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ThumbnailBadgeView from './ThumbnailBadgeView.ts';

export default class ThumbnailOverlayBadgeView extends YTNode {
  static type = 'ThumbnailOverlayBadgeView';

  badges: ThumbnailBadgeView[];
  position: string;

  constructor(data: RawNode) {
    super();

    this.badges = Parser.parseArray(data.thumbnailBadges, ThumbnailBadgeView);
    this.position = data.position;
  }
}