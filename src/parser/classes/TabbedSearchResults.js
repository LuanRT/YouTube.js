import Parser from '../index';
import { YTNode } from '../helpers';

class TabbedSearchResults extends YTNode {
  static type = 'TabbedSearchResults';

  constructor(data) {
    super();
    this.tabs = Parser.parse(data.tabs);
  }
}

export default TabbedSearchResults;