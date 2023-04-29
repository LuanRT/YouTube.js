import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MetadataRowHeader extends YTNode {
  static type = 'MetadataRowHeader';

  content: Text;
  has_divider_line: boolean;

  constructor(data: RawNode) {
    super();
    this.content = new Text(data.content);
    this.has_divider_line = data.hasDividerLine;
  }
}