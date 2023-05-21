import { YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import AdsEngagementPanelContent from './AdsEngagementPanelContent.js';
import ContinuationItem from './ContinuationItem.js';
import SectionList from './SectionList.js';
import StructuredDescriptionContent from './StructuredDescriptionContent.js';

export default class EngagementPanelSectionList extends YTNode {
  static type = 'EngagementPanelSectionList';

  target_id: String;
  content?: AdsEngagementPanelContent|SectionList|ContinuationItem|StructuredDescriptionContent;
  constructor(data: RawNode) {
    super();
    this.target_id = data.targetId;
    const content = Parser.parseItem(data.content, [ AdsEngagementPanelContent, SectionList, ContinuationItem, StructuredDescriptionContent ]);
    if (content !== null) {
      this.content = content;
    }
  }
}
