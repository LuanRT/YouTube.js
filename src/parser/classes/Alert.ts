import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
class Alert extends YTNode {
  static type = 'Alert';

  text: Text;
  alert_type: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
    this.alert_type = data.type;
  }
}

export default Alert;