import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import { Text } from '../misc.js';

export default class Factoid extends YTNode {
  static type = 'Factoid';

  label: Text;
  value: Text;
  accessibility_text: string;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
    this.value = new Text(data.value);
    this.accessibility_text = data.accessibilityText;
  }
}
