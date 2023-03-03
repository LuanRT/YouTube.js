import { YTNode } from '../helpers.js';
import Parser from '../parser.js';

class GuideCollapsibleSectionEntry extends YTNode {
  static type = 'GuideCollapsibleSectionEntry';

  header_entry;
  expander_icon: string;
  collapser_icon: string;
  section_items;

  constructor(data: any) {
    super();

    this.header_entry = Parser.parseItem(data.headerEntry);
    this.expander_icon = data.expanderIcon.iconType;
    this.collapser_icon = data.collapserIcon.iconType;
    this.section_items = Parser.parseArray(data.sectionItems);

  }
}

export default GuideCollapsibleSectionEntry;