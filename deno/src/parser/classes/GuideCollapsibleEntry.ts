import * as Parser from '../parser.ts';
import GuideEntry from './GuideEntry.ts';
import type { RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';

export default class GuideCollapsibleEntry extends YTNode {
  static type = 'GuideCollapsibleEntry';

  expander_item: GuideEntry | null;
  collapser_item: GuideEntry | null;
  expandable_items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.expander_item = Parser.parseItem(data.expanderItem, GuideEntry);
    this.collapser_item = Parser.parseItem(data.collapserItem, GuideEntry);
    this.expandable_items = Parser.parseArray(data.expandableItems);
  }
}