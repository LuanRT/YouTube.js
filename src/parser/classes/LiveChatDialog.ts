import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';

export default class LiveChatDialog extends YTNode {
  static type = 'LiveChatDialog';

  confirm_button: Button | null;
  dialog_messages: Text[];

  constructor (data: RawNode) {
    super();
    this.confirm_button = Parser.parseItem(data.confirmButton, Button);
    this.dialog_messages = data.dialogMessages.map((el: RawNode) => new Text(el));
  }
}