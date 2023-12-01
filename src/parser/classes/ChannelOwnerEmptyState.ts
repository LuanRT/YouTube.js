import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ChannelOwnerEmptyState extends YTNode {
  static type = 'ChannelOwnerEmptyState';

  illustration: Thumbnail[];
  description: Text;

  constructor(data: RawNode) {
    super();
    this.illustration = Thumbnail.fromResponse(data.illustration);
    this.description = new Text(data.description);
  }
}