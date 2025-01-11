import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import type { RawNode } from '../types/index.js';
import BadgeView from './BadgeView.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ShortsLockupView extends YTNode {
  static type = 'ShortsLockupView';

  entity_id: string;
  accessibility_text: string;
  thumbnail: Thumbnail[];
  on_tap_endpoint: NavigationEndpoint;
  menu_on_tap: NavigationEndpoint;
  index_in_collection: number;
  menu_on_tap_a11y_label: string;
  overlay_metadata: {
    primary_text?: Text;
    secondary_text?: Text;
  };
  inline_player_data?: NavigationEndpoint;
  badge?: BadgeView | null;

  constructor(data: RawNode) {
    super();

    this.entity_id = data.entityId;
    this.accessibility_text = data.accessibilityText;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
    this.menu_on_tap = new NavigationEndpoint(data.menuOnTap);
    this.index_in_collection = data.indexInCollection;
    this.menu_on_tap_a11y_label = data.menuOnTapA11yLabel;

    this.overlay_metadata = {
      primary_text: data.overlayMetadata.primaryText ? Text.fromAttributed(data.overlayMetadata.primaryText) : undefined,
      secondary_text: data.overlayMetadata.secondaryText ? Text.fromAttributed(data.overlayMetadata.secondaryText) : undefined
    };

    if (data.inlinePlayerData?.onVisible) {
      this.inline_player_data = new NavigationEndpoint(data.inlinePlayerData.onVisible);
    }

    if (data.badge) {
      this.badge = Parser.parseItem(data.badge, BadgeView);
    }
  }
}