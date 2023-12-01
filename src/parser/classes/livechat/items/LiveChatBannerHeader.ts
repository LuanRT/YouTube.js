import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import { Parser } from '../../../index.js';
import Button from '../../Button.js';
import Text from '../../misc/Text.js';

export default class LiveChatBannerHeader extends YTNode {
  static type = 'LiveChatBannerHeader';

  text: Text;
  icon_type?: string;
  context_menu_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
      this.icon_type = data.icon.iconType;
    }

    this.context_menu_button = Parser.parseItem(data.contextMenuButton, Button);
  }
}