import Text from './misc/Text';

import { YTNode } from '../helpers';

class MetadataRowHeader extends YTNode {
  static type = 'MetadataRowHeader';
  constructor(data) {
    super();
    this.content = new Text(data.content);
    this.has_divider_line = data.hasDividerLine;
  }
}
export default MetadataRowHeader;
