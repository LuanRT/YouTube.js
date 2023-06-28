import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ContinuationItem from './ContinuationItem.ts';
import SectionList from './SectionList.ts';
import StructuredDescriptionContent from './StructuredDescriptionContent.ts';

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
