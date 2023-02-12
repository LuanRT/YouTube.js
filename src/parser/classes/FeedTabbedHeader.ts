import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class FeedTabbedHeader extends YTNode {
  static type = 'FeedTabbedHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default FeedTabbedHeader;