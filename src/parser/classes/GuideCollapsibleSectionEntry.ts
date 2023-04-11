import Parser from '../parser.js';
import type { RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class GuideCollapsibleSectionEntry extends YTNode {
  static type = 'GuideCollapsibleSectionEntry';

  header_entry;
  expander_icon: string;
  collapser_icon: string;
  section_items;

  constructor(data: RawNode) {
    super();
    this.header_entry = Parser.parseItem(data.headerEntry);
    this.expander_icon = data.expanderIcon.iconType;
    this.collapser_icon = data.collapserIcon.iconType;
    this.section_items = Parser.parseArray(data.sectionItems);
  }
}