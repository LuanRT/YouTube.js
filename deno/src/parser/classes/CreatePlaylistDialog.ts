import Parser from '../index.ts';
import { ObservedArray, YTNode } from '../helpers.ts';
import Button from './Button.ts';
import Dropdown from './Dropdown.ts';
import DropdownItem from './DropdownItem.ts';
import Text from './misc/Text.ts';

class CreatePlaylistDialog extends YTNode {
  static type = 'CreatePlaylistDialog';

  title: string;
  title_placeholder: string;
  privacy_option: ObservedArray<DropdownItem> | null;
  cancel_button: Button | null;
  create_button: Button | null;

  constructor(data: any) {
    super();
    this.title = new Text(data.dialogTitle).toString();
    this.title_placeholder = data.titlePlaceholder || '';
    this.privacy_option = Parser.parseItem(data.privacyOption, Dropdown)?.entries || null;
    this.create_button = Parser.parseItem(data.cancelButton);
    this.cancel_button = Parser.parseItem(data.cancelButton);
  }
}

export default CreatePlaylistDialog;