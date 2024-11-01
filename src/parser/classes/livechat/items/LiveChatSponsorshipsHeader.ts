import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';

export default class LiveChatSponsorshipsHeader extends YTNode {
  static type = 'LiveChatSponsorshipsHeader';

  primary_text: Text;
  menu_endpoint: NavigationEndpoint;
  context_menu_accessibility_label: string;
  image: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.primary_text = new Text(data.primaryText);
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
    this.image = Thumbnail.fromResponse(data.image);
  }
}
