import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class FeedTabbedHeader extends YTNode {
  static type = 'FeedTabbedHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default FeedTabbedHeader;