import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ClipSection from './ClipSection.js';
import ContinuationItem from './ContinuationItem.js';
import EngagementPanelTitleHeader from './EngagementPanelTitleHeader.js';
import MacroMarkersList from './MacroMarkersList.js';
import MacroMarkersListView from './MacroMarkersListView.js';
import PlaylistCollaborationView from './PlaylistCollaborationView.js';
import ProductList from './ProductList.js';
import SectionList from './SectionList.js';
import StructuredDescriptionContent from './StructuredDescriptionContent.js';
import VideoAttributeView from './VideoAttributeView.js';
import ItemSection from './ItemSection.js';
import RichTextListView from './RichTextListView.js';

export default class EngagementPanelSectionList extends YTNode {
  static type = 'EngagementPanelSectionList';

  public header: EngagementPanelTitleHeader | null;
  public content:
    PlaylistCollaborationView | VideoAttributeView | ItemSection | SectionList | ContinuationItem |
    ClipSection | StructuredDescriptionContent | MacroMarkersList | MacroMarkersListView |
    ProductList | RichTextListView | null;
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
      PlaylistCollaborationView, VideoAttributeView, ItemSection, SectionList,
      ContinuationItem, ClipSection, StructuredDescriptionContent,
      MacroMarkersList, MacroMarkersListView, ProductList, RichTextListView
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