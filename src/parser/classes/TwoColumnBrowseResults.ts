import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import SectionList from './SectionList.js';
import BrowseFeedActions from './BrowseFeedActions.js';
import ProfileColumn from './ProfileColumn.js';
import Tab from './Tab.js';
import ExpandableTab from './ExpandableTab.js';

export default class TwoColumnBrowseResults extends YTNode {
  static type = 'TwoColumnBrowseResults';

  public tabs: ObservedArray<Tab | ExpandableTab>;
  public secondary_contents: SectionList | BrowseFeedActions | ProfileColumn | null;

  constructor(data: RawNode) {
    super();
    this.tabs = Parser.parseArray(data.tabs, [ Tab, ExpandableTab ]);
    this.secondary_contents = Parser.parseItem(data.secondaryContents, [ SectionList, BrowseFeedActions, ProfileColumn ]);
  }
}