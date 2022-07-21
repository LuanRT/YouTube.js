import Text from './misc/Text';
import { YTNode } from '../helpers';

class ChannelMobileHeader extends YTNode {
  static type = 'ChannelMobileHeader';

  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
}

export default ChannelMobileHeader;