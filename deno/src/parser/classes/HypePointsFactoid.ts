import { Parser, type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import Factoid from './Factoid.ts';

export default class HypePointsFactoid extends YTNode {
  static type = 'HypePointsFactoid';

  public factoid: Factoid | null;

  constructor(data: RawNode) {
    super();
    this.factoid = Parser.parseItem(data.factoid, Factoid);
  }
}