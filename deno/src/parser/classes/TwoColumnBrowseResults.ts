import { YTNode, type SuperParsedResult } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';

export default class TwoColumnBrowseResults extends YTNode {
  static type = 'TwoColumnBrowseResults';

  tabs: SuperParsedResult<YTNode>;
  secondary_contents: SuperParsedResult<YTNode>;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parse(data.tabs);
    this.secondary_contents = Parser.parse(data.secondaryContents);
  }
}