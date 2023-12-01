import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ButtonView extends YTNode {
  static type = 'ButtonView';

  icon_name: string;
  title: string;
  accessibility_text: string;
  style: string;
  is_full_width: boolean;
  type: string;
  button_size: string;
  on_tap: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.icon_name = data.iconName;
    this.title = data.title;
    this.accessibility_text = data.accessibilityText;
    this.style = data.style;
    this.is_full_width = data.isFullWidth;
    this.type = data.type;
    this.button_size = data.buttonSize;
    this.on_tap = new NavigationEndpoint(data.onTap);
  }
}