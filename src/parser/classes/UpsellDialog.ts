import Parser from '..';
import { YTNode } from '../helpers';
import type Button from './Button';
import Text from './misc/Text';

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
    this.action_button = Parser.parseItem<Button>(data.actionButton);
    this.dismiss_button = Parser.parseItem<Button>(data.dismissButton);
    this.is_visible = data.isVisible;
  }
}

export default UpsellDialog;