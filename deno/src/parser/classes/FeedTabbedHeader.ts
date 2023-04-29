import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class FeedTabbedHeader extends YTNode {
  static type = 'FeedTabbedHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}