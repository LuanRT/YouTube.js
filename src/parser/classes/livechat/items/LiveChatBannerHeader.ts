import Parser from '../../../index';
import Text from '../../misc/Text';
import { YTNode } from '../../../helpers';

class LiveChatBannerHeader extends YTNode {
  static type = 'LiveChatBannerHeader';

  text: string;
  icon_type: string;
  context_menu_button;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
    this.context_menu_button = Parser.parse(data.contextMenuButton);
  }
}

export default LiveChatBannerHeader;