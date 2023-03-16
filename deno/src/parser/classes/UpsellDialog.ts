import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import Button from './Button.ts';
import Text from './misc/Text.ts';

class UpsellDialog extends YTNode {
  static type = 'UpsellDialog';

  message_title: Text;
  message_text: Text;
  action_button: Button | null;
  dismiss_button: Button | null;
  is_visible: boolean;

  constructor(data: any) {
    super();
    this.message_title = new Text(data.dialogMessageTitle);
    this.message_text = new Text(data.dialogMessageText);
    this.action_button = Parser.parseItem(data.actionButton, Button);
    this.dismiss_button = Parser.parseItem(data.dismissButton, Button);
    this.is_visible = data.isVisible;
  }
}

export default UpsellDialog;