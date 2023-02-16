import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import type { RawNode } from '../index.js';

class HashtagHeader extends YTNode {
  static type = 'HashtagHeader';

  hashtag: Text;
  hashtag_info: Text;

  constructor(data: RawNode) {
    super();
    this.hashtag = new Text(data.hashtag);
    this.hashtag_info = new Text(data.hashtagInfoText);
  }
}

export default HashtagHeader;