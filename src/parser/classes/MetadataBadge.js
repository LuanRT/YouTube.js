import { YTNode } from '../helpers';

class MetadataBadge extends YTNode {
  static type = 'MetadataBadge';

  constructor(data) {
    super();

    if (data?.icon) {
      this.icon_type = data.icon.iconType;
    }

    if (data?.style) {
      this.style = data.style;
    }

    this.tooltip = data?.tooltip || data?.iconTooltip || null;
  }
}

export default MetadataBadge;