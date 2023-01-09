import Thumbnail from '../misc/Thumbnail';
import { YTNode } from '../../helpers';

class SponsorCommentBadge extends YTNode {
  static type = 'SponsorCommentBadge';

  custom_badge: Thumbnail[];
  tooltip: string;

  constructor(data: any) {
    super();
    this.custom_badge = Thumbnail.fromResponse(data.customBadge);
    this.tooltip = data.tooltip;
  }
}

export default SponsorCommentBadge;