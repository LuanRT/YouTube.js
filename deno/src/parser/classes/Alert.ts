import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class Alert extends YTNode {
  static type = 'Alert';

  text: Text;
  alert_type: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
    this.alert_type = data.type;
  }
}