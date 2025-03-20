import { YTNode } from '../helpers.ts';
import type { RawNode } from '../types/index.ts';

export default class BadgeView extends YTNode {
  text: string;
  style: string;
  accessibility_label: string;

  constructor(data: RawNode) {
    super();

    this.text = data.badgeText;
    this.style = data.badgeStyle;
    this.accessibility_label = data.accessibilityLabel;
  }
}