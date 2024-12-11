import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class ClientSideToggleMenuItem extends YTNode {
  static type = 'ClientSideToggleMenuItem';

  text: Text;
  icon_type: string;
  toggled_text: Text;
  toggled_icon_type: string;
  menu_item_identifier: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.defaultText);
    this.icon_type = data.defaultIcon.iconType;
    this.toggled_text = new Text(data.toggledText);
    this.toggled_icon_type = data.toggledIcon.iconType;
    this.menu_item_identifier = data.menuItemIdentifier;
  }
}
