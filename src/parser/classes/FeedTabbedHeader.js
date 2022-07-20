import Text from './misc/Text';

import { YTNode } from '../helpers';

class FeedTabbedHeader extends YTNode {
  static type = 'FeedTabbedHeader';
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
}
export default FeedTabbedHeader;
