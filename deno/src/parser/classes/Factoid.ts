import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import { Text } from '../misc.ts';

export default class Factoid extends YTNode {
  static type = 'Factoid';

  label: Text;
  value: Text;
  accessibility_text: String;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
    this.value = new Text(data.value);
    this.accessibility_text = data.accessibilityText;
  }
}
