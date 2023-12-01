import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Tab from './Tab.ts';

export default class SingleColumnBrowseResults extends YTNode {
  static type = 'SingleColumnBrowseResults';

  tabs: ObservedArray<Tab>;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parseArray(data.tabs, Tab);
  }
}