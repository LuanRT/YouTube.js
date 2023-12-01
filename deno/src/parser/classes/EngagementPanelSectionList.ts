import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ClipSection from './ClipSection.ts';
import ContinuationItem from './ContinuationItem.ts';
import EngagementPanelTitleHeader from './EngagementPanelTitleHeader.ts';
import MacroMarkersList from './MacroMarkersList.ts';
import ProductList from './ProductList.ts';
import SectionList from './SectionList.ts';
import StructuredDescriptionContent from './StructuredDescriptionContent.ts';
import VideoAttributeView from './VideoAttributeView.ts';

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