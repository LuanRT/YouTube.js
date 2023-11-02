import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Tab from './Tab.js';

export default class SingleColumnBrowseResults extends YTNode {
  static type = 'SingleColumnBrowseResults';

  tabs: ObservedArray<Tab>;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parseArray(data.tabs, Tab);
  }
}