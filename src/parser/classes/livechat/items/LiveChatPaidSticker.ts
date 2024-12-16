import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';

export default class LiveChatPaidSticker extends YTNode {
  static type = 'LiveChatPaidSticker';

  id: string;
  author: Author;
  money_chip_background_color: number;
  money_chip_text_color: number;
  background_color: number;
  author_name_text_color: number;
  sticker: Thumbnail[];
  sticker_accessibility_label: string;
  sticker_display_width: number;
  sticker_display_height: number;
  purchase_amount: string;
  menu_endpoint: NavigationEndpoint;
  context_menu: NavigationEndpoint;
  context_menu_accessibility_label: string;
  timestamp: number;
  timestamp_usec: string;
  is_v2_style: boolean;

  constructor(data: RawNode) {
    super();
    this.id = data.id;

    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );

    this.money_chip_background_color = data.moneyChipBackgroundColor;
    this.money_chip_text_color = data.moneyChipTextColor;
    this.background_color = data.backgroundColor;
    this.author_name_text_color = data.authorNameTextColor;
    this.sticker = Thumbnail.fromResponse(data.sticker);
    this.sticker_accessibility_label = data.sticker.accessibility.accessibilityData.label;
    this.sticker_display_width = data.stickerDisplayWidth;
    this.sticker_display_height = data.stickerDisplayHeight;
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu = this.menu_endpoint;
    this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_usec = data.timestampUsec;
    this.is_v2_style = data.isV2Style;
  }
}