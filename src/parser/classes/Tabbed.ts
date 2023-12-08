import { YTNode, type SuperParsedResult } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class Tabbed extends YTNode {
  static type = 'Tabbed';

  contents: SuperParsedResult<YTNode>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parse(data);
  }
}