import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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