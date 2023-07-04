import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ContinuationItem from './ContinuationItem.ts';
import EngagementPanelTitleHeader from './EngagementPanelTitleHeader.ts';
import SectionList from './SectionList.ts';
import StructuredDescriptionContent from './StructuredDescriptionContent.ts';

export default class EngagementPanelSectionList extends YTNode {
  static type = 'EngagementPanelSectionList';

  header: EngagementPanelTitleHeader | null;
  content: SectionList | ContinuationItem | StructuredDescriptionContent | null;
  target_id?: string;
  panel_identifier?: string;
  visibility?: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, EngagementPanelTitleHeader);
    this.content = Parser.parseItem(data.content, [ SectionList, ContinuationItem, StructuredDescriptionContent ]);
    this.panel_identifier = data.panelIdentifier;
    this.target_id = data.targetId;
    this.visibility = data.visibility;
  }
}
