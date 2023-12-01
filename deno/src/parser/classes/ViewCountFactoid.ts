import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import Factoid from './Factoid.ts';

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
