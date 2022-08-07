import Parser from '../index';
import Tab from './Tab';

import { YTNode } from '../helpers';

class SingleColumnBrowseResults extends YTNode {
  static type = 'SingleColumnBrowseResults';

  tabs;

  constructor(data: any) {
    super();
    this.tabs = Parser.parseArray<Tab>(data.tabs, Tab);
  }
}

export default SingleColumnBrowseResults;