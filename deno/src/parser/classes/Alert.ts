import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class Alert extends YTNode {
  static type = 'Alert';

  text: Text;
  alert_type: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text);
    this.alert_type = data.type;
  }
}

export default Alert;