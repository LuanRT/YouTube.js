import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class InfoRow extends YTNode {
  static type = 'InfoRow';

  metadata: String;
  info_row_expand_status_key: String;
  title: String;

  constructor(data: RawNode) {
    super();
    this.metadata = data.defaultMetadata?.simpleText || data.expandedMetadata?.simpleText;
    this.info_row_expand_status_key = data.infoRowExpandStatusKey;
    this.title = data.title.simpleText;
  }
}
