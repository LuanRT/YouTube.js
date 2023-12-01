import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import Tab from './Tab.js';

export default class TabbedSearchResults extends YTNode {
  static type = 'TabbedSearchResults';

  tabs: ObservedArray<Tab>;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parseArray(data.tabs, Tab);
  }
}