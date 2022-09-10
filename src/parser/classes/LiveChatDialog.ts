import Parser from '..';
import Text from './misc/Text';
import Button from './Button';
import { YTNode } from '../helpers';

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