import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ClipSection from './ClipSection.ts';
import ContinuationItem from './ContinuationItem.ts';
import EngagementPanelTitleHeader from './EngagementPanelTitleHeader.ts';
import MacroMarkersList from './MacroMarkersList.ts';
import PlaylistCollaborationView from './PlaylistCollaborationView.ts';
import ProductList from './ProductList.ts';
import SectionList from './SectionList.ts';
import StructuredDescriptionContent from './StructuredDescriptionContent.ts';
import VideoAttributeView from './VideoAttributeView.ts';

export default class EngagementPanelSectionList extends YTNode {
  static type = 'EngagementPanelSectionList';

  public header: EngagementPanelTitleHeader | null;
  public content: PlaylistCollaborationView | VideoAttributeView | SectionList | ContinuationItem | ClipSection | StructuredDescriptionContent | MacroMarkersList | ProductList | null;
  public target_id?: string;
  public panel_identifier?: string;
  public identifier?: {
    surface: string,
    tag: string
  };
  public visibility?: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, EngagementPanelTitleHeader);
    this.content = Parser.parseItem(data.content, [
      PlaylistCollaborationView, VideoAttributeView, SectionList,
      ContinuationItem, ClipSection, StructuredDescriptionContent,
      MacroMarkersList, ProductList
    ]);

    this.panel_identifier = data.panelIdentifier;

    if ('identifier' in data) {
      this.identifier = {
        surface: data.identifier.surface,
        tag: data.identifier.tag
      };
    }

    this.target_id = data.targetId;
    this.visibility = data.visibility;
  }
}