import Parser from '..';
import { ObservedArray, YTNode } from '../helpers';
import Button from './Button';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import Text from './misc/Text';

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