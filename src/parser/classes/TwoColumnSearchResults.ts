import Parser from '../index';
import { YTNode } from '../helpers';

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