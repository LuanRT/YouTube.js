import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class TwoColumnBrowseResults extends YTNode {
  static type = 'TwoColumnBrowseResults';

  tabs;
  secondary_contents;

  constructor(data: any) {
    super();
    this.tabs = Parser.parse(data.tabs);
    this.secondary_contents = Parser.parse(data.secondaryContents);
  }
}

export default TwoColumnBrowseResults;