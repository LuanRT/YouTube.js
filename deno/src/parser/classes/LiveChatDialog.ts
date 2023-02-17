import Parser from '../index.ts';
import Text from './misc/Text.ts';
import Button from './Button.ts';
import { YTNode } from '../helpers.ts';

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