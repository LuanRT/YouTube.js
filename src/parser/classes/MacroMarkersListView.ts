import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import RendererContext from './misc/RendererContext.js';
import Text from './misc/Text.js';

export default class MacroMarkersListView extends YTNode {
  static type = 'MacroMarkersListView';

  title?: Text;
  macro_marker_list_entity_key: string;
  context?: string;
  markers_engagement_panel_sync_entity_key?: string;
  renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'title')) {
      this.title = Text.fromAttributed(data.title);
    }

    this.macro_marker_list_entity_key = data.macroMarkerListEntityKey;
    this.context = data.context;
    this.markers_engagement_panel_sync_entity_key = data.markersEngagementPanelSyncEntityKey;
    this.renderer_context = new RendererContext(data.rendererContext);
  }
}