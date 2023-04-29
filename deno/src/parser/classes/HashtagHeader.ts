import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';
import type { RawNode } from '../index.ts';

export default class HashtagHeader extends YTNode {
  static type = 'HashtagHeader';

  hashtag: Text;
  hashtag_info: Text;

  constructor(data: RawNode) {
    super();
    this.hashtag = new Text(data.hashtag);
    this.hashtag_info = new Text(data.hashtagInfoText);
  }
}