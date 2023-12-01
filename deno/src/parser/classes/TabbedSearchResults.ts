import { Parser, type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';
import Tab from './Tab.ts';

export default class TabbedSearchResults extends YTNode {
  static type = 'TabbedSearchResults';

  tabs: ObservedArray<Tab>;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parseArray(data.tabs, Tab);
  }
}