import Button from './Button.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';

export default class AlertWithButton extends YTNode {
  static type = 'AlertWithButton';

  text: Text;
  alert_type: string;
  dismiss_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
    this.alert_type = data.type;
    this.dismiss_button = Parser.parseItem(data.dismissButton, Button);
  }
}