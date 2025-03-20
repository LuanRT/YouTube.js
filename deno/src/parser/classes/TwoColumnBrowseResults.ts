import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import SectionList from './SectionList.ts';
import BrowseFeedActions from './BrowseFeedActions.ts';
import ProfileColumn from './ProfileColumn.ts';
import Tab from './Tab.ts';
import ExpandableTab from './ExpandableTab.ts';

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