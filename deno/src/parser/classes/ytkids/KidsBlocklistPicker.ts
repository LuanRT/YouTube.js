import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import Button from '../Button.ts';
import Parser, { type RawNode } from '../../index.ts';
import KidsBlocklistPickerItem from './KidsBlocklistPickerItem.ts';

export default class KidsBlocklistPicker extends YTNode {
  static type = 'KidsBlocklistPicker';

  title: Text;
  child_rows: KidsBlocklistPickerItem[] | null;
  done_button: Button | null;
  successful_toast_action_message: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.child_rows = Parser.parse(data.childRows, true, [ KidsBlocklistPickerItem ]);
    this.done_button = Parser.parseItem(data.doneButton, [ Button ]);
    this.successful_toast_action_message = new Text(data.successfulToastActionMessage);
  }
}