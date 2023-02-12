import Parser from '../index.js';
import Tab from './Tab.js';

import { YTNode } from '../helpers.js';

class SingleColumnBrowseResults extends YTNode {
  static type = 'SingleColumnBrowseResults';

  tabs;

  constructor(data: any) {
    super();
    this.tabs = Parser.parseArray<Tab>(data.tabs, Tab);
  }
}

export default SingleColumnBrowseResults;