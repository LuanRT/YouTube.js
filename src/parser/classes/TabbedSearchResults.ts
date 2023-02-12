import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Tab from './Tab.js';

class TabbedSearchResults extends YTNode {
  static type = 'TabbedSearchResults';

  tabs;

  constructor(data: any) {
    super();
    this.tabs = Parser.parseArray<Tab>(data.tabs, Tab);
  }
}

export default TabbedSearchResults;