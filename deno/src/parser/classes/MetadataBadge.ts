import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MetadataBadge extends YTNode {
  static type = 'MetadataBadge';

  icon_type?: string;
  style?: string;
  label?: string;
  tooltip?: string;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon.iconType;
    }

    if (Reflect.has(data, 'style')) {
      this.style = data.style;
    }

    if (Reflect.has(data, 'label')) {
      this.label = data.label;
    }

    if (Reflect.has(data, 'tooltip') || Reflect.has(data, 'iconTooltip')) {
      this.tooltip = data.tooltip || data.iconTooltip;
    }
  }
}