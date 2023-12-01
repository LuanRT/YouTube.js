import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ClipSection from './ClipSection.js';
import ContinuationItem from './ContinuationItem.js';
import EngagementPanelTitleHeader from './EngagementPanelTitleHeader.js';
import MacroMarkersList from './MacroMarkersList.js';
import ProductList from './ProductList.js';
import SectionList from './SectionList.js';
import StructuredDescriptionContent from './StructuredDescriptionContent.js';
import VideoAttributeView from './VideoAttributeView.js';

export default class EngagementPanelSectionList extends YTNode {
  static type = 'EngagementPanelSectionList';

  header: EngagementPanelTitleHeader | null;
  content: VideoAttributeView | SectionList | ContinuationItem | ClipSection | StructuredDescriptionContent | MacroMarkersList | ProductList | null;
  target_id?: string;
  panel_identifier?: string;
  identifier?: {
    surface: string,
    tag: string
  };
  visibility?: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, EngagementPanelTitleHeader);
    this.content = Parser.parseItem(data.content, [ VideoAttributeView, SectionList, ContinuationItem, ClipSection, StructuredDescriptionContent, MacroMarkersList, ProductList ]);
    this.panel_identifier = data.panelIdentifier;
    this.identifier = data.identifier ? {
      surface: data.identifier.surface,
      tag: data.identifier.tag
    } : undefined;
    this.target_id = data.targetId;
    this.visibility = data.visibility;
  }
}