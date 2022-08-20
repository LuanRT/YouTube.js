import { YTNode } from '../helpers';

class MetadataBadge extends YTNode {
  static type = 'MetadataBadge';

  icon_type?: string;
  style?: string;
  tooltip: string | null;

  constructor(data: any) {
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