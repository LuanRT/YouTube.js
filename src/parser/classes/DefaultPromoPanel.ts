import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class DefaultPromoPanel extends YTNode {
  static type = 'DefaultPromoPanel';

  title: Text;
  description: Text;
  endpoint: NavigationEndpoint;
  large_form_factor_background_thumbnail: YTNode;
  small_form_factor_background_thumbnail: YTNode;
  scrim_color_values: number[];
  min_panel_display_duration_ms: number;
  min_video_play_duration_ms: number;
  scrim_duration: number;
  metadata_order: string;
  panel_layout: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.large_form_factor_background_thumbnail = Parser.parseItem(data.largeFormFactorBackgroundThumbnail);
    this.small_form_factor_background_thumbnail = Parser.parseItem(data.smallFormFactorBackgroundThumbnail);
    this.scrim_color_values = data.scrimColorValues;
    this.min_panel_display_duration_ms = data.minPanelDisplayDurationMs;
    this.min_video_play_duration_ms = data.minVideoPlayDurationMs;
    this.scrim_duration = data.scrimDuration;
    this.metadata_order = data.metadataOrder;
    this.panel_layout = data.panelLayout;
  }
}