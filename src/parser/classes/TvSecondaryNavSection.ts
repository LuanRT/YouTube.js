import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Tab from './Tab.js';

export default class TvSecondaryNavSection extends YTNode {
  static type = 'TvSecondaryNavSection';

  tabs: ObservedArray<Tab> | null;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parse(data.tabs, true, Tab);
  }
}