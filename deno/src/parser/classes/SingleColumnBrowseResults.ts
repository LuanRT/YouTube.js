import Parser from '../index.ts';
import Tab from './Tab.ts';

import { YTNode } from '../helpers.ts';

class SingleColumnBrowseResults extends YTNode {
  static type = 'SingleColumnBrowseResults';

  tabs;

  constructor(data: any) {
    super();
    this.tabs = Parser.parseArray<Tab>(data.tabs, Tab);
  }
}

export default SingleColumnBrowseResults;