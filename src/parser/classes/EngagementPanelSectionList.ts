import { YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import ContinuationItem from './ContinuationItem.js';
import SectionList from './SectionList.js';
import StructuredDescriptionContent from './StructuredDescriptionContent.js';

export default class EngagementPanelSectionList extends YTNode {
  static type = 'EngagementPanelSectionList';

  target_id: String;
  content?: SectionList|ContinuationItem|StructuredDescriptionContent;
  constructor(data: RawNode) {
    super();
    this.target_id = data.targetId;
    const content = Parser.parseItem(data.content, [ SectionList, ContinuationItem, StructuredDescriptionContent ]);
    if (content !== null) {
      this.content = content;
    }
  }
}
