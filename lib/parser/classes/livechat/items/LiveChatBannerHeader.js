import Parser from '../../../index';
import Text from '../../misc/Text';

import { YTNode } from '../../../helpers';
class LiveChatBannerHeader extends YTNode {
  static type = 'LiveChatBannerHeader';
  constructor(data) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
    this.context_menu_button = Parser.parse(data.contextMenuButton);
  }
}
export default LiveChatBannerHeader;
