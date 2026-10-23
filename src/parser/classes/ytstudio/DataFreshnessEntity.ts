import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';

export default class DataFreshnessEntity extends YTNode {
  static type = 'DataFreshnessEntity';

  entity_key: string;
  last_updated: { seconds: string, nanos: number };

  constructor(data: RawNode) {
    super();
    this.entity_key = data.key;
    this.last_updated = data.lastUpdated;
  }
}
