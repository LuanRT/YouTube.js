import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class Button extends YTNode {
  static type = 'Button';

  text?: string;
  label?: string;
  tooltip?: string;
  style?: string;
  size?: string;
  icon_type?: string;
  is_disabled?: boolean;
  target_id?: string;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'text'))
      this.text = new Text(data.text).toString();

    if (Reflect.has(data, 'accessibility') && Reflect.has(data.accessibility, 'label')) {
      this.label = data.accessibility.label;
    } else if (
      Reflect.has(data, 'accessibilityData') &&
      Reflect.has(data.accessibilityData, 'accessibilityData') &&
      Reflect.has(data.accessibilityData.accessibilityData, 'label')
    ) {
      this.label = data.accessibilityData.accessibilityData.label;
    }

    if (Reflect.has(data, 'tooltip'))
      this.tooltip = data.tooltip;

    if (Reflect.has(data, 'style'))
      this.style = data.style;

    if (Reflect.has(data, 'size'))
      this.size = data.size;

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType'))
      this.icon_type = data.icon.iconType;

    if (Reflect.has(data, 'isDisabled'))
      this.is_disabled = data.isDisabled;

    if (Reflect.has(data, 'targetId'))
      this.target_id = data.targetId;

    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint || data.command);
  }
}