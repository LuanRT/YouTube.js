import Thumbnail from '../misc/Thumbnail.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class SponsorCommentBadge extends YTNode {
  static type = 'SponsorCommentBadge';

  custom_badge: Thumbnail[];
  tooltip: string;

  constructor(data: RawNode) {
    super();
    this.custom_badge = Thumbnail.fromResponse(data.customBadge);
    this.tooltip = data.tooltip;
  }
}