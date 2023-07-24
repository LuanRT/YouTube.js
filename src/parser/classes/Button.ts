import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class Button extends YTNode {
  static type = 'Button';

  text?: string;
  label?: string;
  tooltip?: string;
  icon_type?: string;
  is_disabled?: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'text'))
      this.text = new Text(data.text).toString();

    if (Reflect.has(data, 'accessibility') && Reflect.has(data.accessibility, 'label'))
      this.label = data.accessibility.label;

    if (Reflect.has(data, 'tooltip'))
      this.tooltip = data.tooltip;

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType'))
      this.icon_type = data.icon.iconType;

    if (Reflect.has(data, 'isDisabled'))
      this.is_disabled = data.isDisabled;

    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint || data.command);
  }
}