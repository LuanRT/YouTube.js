import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class Factoid extends YTNode {
  static type = 'Factoid';
  label: String;
  value: String;
  accessibility_text: String;

  constructor(data: RawNode) {
    super();
    this.label = data.label.simpleText;
    this.value = data.label.simpleText;
    this.accessibility_text = data.accessibilityText;
  }
}
