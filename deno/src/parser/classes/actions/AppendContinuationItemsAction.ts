import Parser from '../../index.ts';
import type { RawNode } from '../../index.ts';
import { type SuperParsedResult, YTNode } from '../../helpers.ts';

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