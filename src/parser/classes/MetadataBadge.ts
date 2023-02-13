import { YTNode } from '../helpers.js';

class MetadataBadge extends YTNode {
  static type = 'MetadataBadge';

  icon_type?: string;
  style?: string;
  label?: string;
  tooltip?: string;

  constructor(data: any) {
    super();

    if (data?.icon) {
      this.icon_type = data.icon.iconType;
    }

    if (data?.style) {
      this.style = data.style;
    }

    if (data?.label) {
      this.label = data.label;
    }

    if (data?.tooltip || data?.iconTooltip) {
      this.tooltip = data.tooltip || data.iconTooltip;
    }
  }
}

export default MetadataBadge;