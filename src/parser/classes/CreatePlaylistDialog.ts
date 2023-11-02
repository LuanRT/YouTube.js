import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import Dropdown from './Dropdown.js';
import Text from './misc/Text.js';

export default class CreatePlaylistDialog extends YTNode {
  static type = 'CreatePlaylistDialog';

  title: string;
  title_placeholder: string;
  privacy_option: Dropdown | null;
  cancel_button: Button | null;
  create_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.dialogTitle).toString();
    this.title_placeholder = data.titlePlaceholder || '';
    this.privacy_option = Parser.parseItem(data.privacyOption, Dropdown);
    this.create_button = Parser.parseItem(data.cancelButton, Button);
    this.cancel_button = Parser.parseItem(data.cancelButton, Button);
  }
}