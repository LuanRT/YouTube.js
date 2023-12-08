import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import Factoid from './Factoid.js';

export default class ViewCountFactoid extends YTNode {
  static type = 'ViewCountFactoid';

  view_count_entity_key: string;
  factoid: Factoid | null;
  view_count_type: string;

  constructor(data: RawNode) {
    super();
    this.view_count_entity_key = data.viewCountEntityKey;
    this.factoid = Parser.parseItem(data.factoid, [ Factoid ]);
    this.view_count_type = data.viewCountType;
  }
}
