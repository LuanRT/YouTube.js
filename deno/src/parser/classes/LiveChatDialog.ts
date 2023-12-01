import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Button from './Button.ts';
import Text from './misc/Text.ts';

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