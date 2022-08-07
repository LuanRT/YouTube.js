import Parser from '../index';
import { YTNode } from '../helpers';
import Tab from './Tab';

class TabbedSearchResults extends YTNode {
  static type = 'TabbedSearchResults';

  tabs;

  constructor(data: any) {
    super();
    this.tabs = Parser.parseArray<Tab>(data.tabs, Tab);
  }
}

export default TabbedSearchResults;