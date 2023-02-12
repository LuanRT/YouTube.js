import Parser from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import { YTNode } from '../helpers.js';

class LiveChatDialog extends YTNode {
  static type = 'LiveChatDialog';

  confirm_button: Button | null;
  dialog_messages: Text[];

  constructor (data: any) {
    super();
    this.confirm_button = Parser.parseItem<Button>(data.confirmButton, Button);
    this.dialog_messages = data.dialogMessages.map((el: any) => new Text(el));
  }
}

export default LiveChatDialog;