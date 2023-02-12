import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class TwoColumnSearchResults extends YTNode {
  static type = 'TwoColumnSearchResults';

  primary_contents;
  secondary_contents;

  constructor(data: any) {
    super();
    this.primary_contents = Parser.parse(data.primaryContents);
    this.secondary_contents = Parser.parse(data.secondaryContents);
  }
}

export default TwoColumnSearchResults;