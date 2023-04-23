import Parser from '../../index.js';
import type { RawNode } from '../../index.js';
import { type SuperParsedResult, YTNode } from '../../helpers.js';

export default class AppendContinuationItemsAction extends YTNode {
  static type = 'AppendContinuationItemsAction';

  items: SuperParsedResult<YTNode>;
  target: string;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.continuationItems);
    this.target = data.target;
  }
}