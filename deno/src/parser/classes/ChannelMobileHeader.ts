import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class ChannelMobileHeader extends YTNode {
  static type = 'ChannelMobileHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default ChannelMobileHeader;