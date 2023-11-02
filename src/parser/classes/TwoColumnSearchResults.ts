import { YTNode, type SuperParsedResult } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class TwoColumnSearchResults extends YTNode {
  static type = 'TwoColumnSearchResults';

  primary_contents: SuperParsedResult<YTNode>;
  secondary_contents: SuperParsedResult<YTNode>;

  constructor(data: RawNode) {
    super();
    this.primary_contents = Parser.parse(data.primaryContents);
    this.secondary_contents = Parser.parse(data.secondaryContents);
  }
}