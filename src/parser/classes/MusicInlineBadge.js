import { YTNode } from '../helpers';

class MusicInlineBadge extends YTNode {
  static type = 'MusicInlineBadge';

  constructor(data) {
    super();
    this.icon_type = data.icon.iconType;
    this.label = data.accessibilityData.accessibilityData.label;
  }
}

export default MusicInlineBadge;