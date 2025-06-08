import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.js';

export default class Button extends YTNode {
  static type = 'Button';

  public text?: string;
  public label?: string;
  public tooltip?: string;
  public style?: string;
  public size?: string;
  public icon_type?: string;
  public is_disabled?: boolean;
  public target_id?: string;
  public endpoint: NavigationEndpoint;
  public accessibility?: AccessibilitySupportedDatas;
  
  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'text'))
      this.text = new Text(data.text).toString();

    if (Reflect.has(data, 'accessibility') && Reflect.has(data.accessibility, 'label')) {
      this.label = data.accessibility.label;
    }

    if ('accessibilityData' in data
      && 'accessibilityData' in data.accessibilityData) {
      this.accessibility = {
        accessibility_data: new AccessibilityData(data.accessibilityData.accessibilityData)
      };
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