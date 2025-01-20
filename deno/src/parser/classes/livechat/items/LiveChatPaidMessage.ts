import { YTNode } from '../../../helpers.ts';
import { Parser, type RawNode } from '../../../index.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import Author from '../../misc/Author.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import CreatorHeartView from './CreatorHeartView.ts';
import LiveChatItemBumperView from './LiveChatItemBumperView.ts';
import PdgReplyButtonView from './PdgReplyButtonView.ts';

export default class LiveChatPaidMessage extends YTNode {
  static type = 'LiveChatPaidMessage';

  id: string;
  message: Text;
  author: Author;
  author_name_text_color: number;
  header_background_color: number;
  header_text_color: number;
  body_background_color: number;
  body_text_color: number;
  purchase_amount: string;
  menu_endpoint: NavigationEndpoint;
  context_menu_accessibility_label: string;
  timestamp: number;
  timestamp_usec: string;
  timestamp_text?: string;
  timestamp_color: number;
  header_overlay_image?: Thumbnail[];
  text_input_background_color: number;
  lower_bumper: LiveChatItemBumperView | null;
  creator_heart_button: CreatorHeartView | null;
  is_v2_style: boolean;
  reply_button: PdgReplyButtonView | null;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.message = new Text(data.message);

    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );

    this.author_name_text_color = data.authorNameTextColor;
    this.header_background_color = data.headerBackgroundColor;
    this.header_text_color = data.headerTextColor;
    this.body_background_color = data.bodyBackgroundColor;
    this.body_text_color = data.bodyTextColor;
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_usec = data.timestampUsec;

    if (Reflect.has(data, 'timestampText')) {
      this.timestamp_text = new Text(data.timestampText).toString();
    }

    this.timestamp_color = data.timestampColor;

    if (Reflect.has(data, 'headerOverlayImage')) {
      this.header_overlay_image = Thumbnail.fromResponse(data.headerOverlayImage);
    }

    this.text_input_background_color = data.textInputBackgroundColor;
    this.lower_bumper = Parser.parseItem(data.lowerBumper, LiveChatItemBumperView);
    this.creator_heart_button = Parser.parseItem(data.creatorHeartButton, CreatorHeartView);
    this.is_v2_style = data.isV2Style;
    this.reply_button = Parser.parseItem(data.replyButton, PdgReplyButtonView);
  }
}