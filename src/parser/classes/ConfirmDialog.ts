import Parser from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';

import { YTNode } from '../helpers.js';

class ConfirmDialog extends YTNode {
  static type = 'ConfirmDialog';

  title: Text;
  confirm_button: Button | null;
  cancel_button: Button | null;
  dialog_messages: Text[];

  constructor (data: any) {
    super();
    this.title = new Text(data.title);
    this.confirm_button = Parser.parseItem(data.confirmButton, Button);
    this.cancel_button = Parser.parseItem(data.cancelButton, Button);
    this.dialog_messages = data.dialogMessages.map((txt: any) => new Text(txt));
  }
}

export default ConfirmDialog;