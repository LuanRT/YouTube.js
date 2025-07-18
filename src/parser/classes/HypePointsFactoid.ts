import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import Factoid from './Factoid.js';

export default class HypePointsFactoid extends YTNode {
  static type = 'HypePointsFactoid';

  public factoid: Factoid | null;

  constructor(data: RawNode) {
    super();
    this.factoid = Parser.parseItem(data.factoid, Factoid);
  }
}