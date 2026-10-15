import { YTNode, type ObservedArray } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';
import Tab from '../Tab.js';

export default class TvSecondaryNavSection extends YTNode {
  static type = 'TvSecondaryNavSection';

  tabs: ObservedArray<Tab>;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parseArray(data.tabs, Tab);
  }
}