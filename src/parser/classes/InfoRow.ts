import { YTNode } from '../helpers.js';
import { Text } from '../misc.js';
import type { RawNode } from '../index.js';

export default class InfoRow extends YTNode {
  static type = 'InfoRow';

  title: Text;
  default_metadata?: Text;
  expanded_metadata?: Text;
  info_row_expand_status_key?: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);

    if (Reflect.has(data, 'defaultMetadata')) {
      this.default_metadata = new Text(data.defaultMetadata);
    }

    if (Reflect.has(data, 'expandedMetadata')) {
      this.expanded_metadata = new Text(data.expandedMetadata);
    }

    if (Reflect.has(data, 'infoRowExpandStatusKey')) {
      this.info_row_expand_status_key = data.infoRowExpandStatusKey;
    }
  }
}