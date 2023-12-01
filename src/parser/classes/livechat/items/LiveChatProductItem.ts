import { Parser } from '../../../index.js';
import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';

import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';

export default class LiveChatProductItem extends YTNode {
  static type = 'LiveChatProductItem';

  title: string;
  accessibility_title: string;
  thumbnail: Thumbnail[];
  price: string;
  vendor_name: string;
  from_vendor_text: string;
  information_button: YTNode;
  endpoint: NavigationEndpoint;
  creator_message: string;
  creator_name: string;
  author_photo: Thumbnail[];
  information_dialog: YTNode;
  is_verified: boolean;
  creator_custom_message: Text;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.accessibility_title = data.accessibilityTitle;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.price = data.price;
    this.vendor_name = data.vendorName;
    this.from_vendor_text = data.fromVendorText;
    this.information_button = Parser.parseItem(data.informationButton);
    this.endpoint = new NavigationEndpoint(data.onClickCommand);
    this.creator_message = data.creatorMessage;
    this.creator_name = data.creatorName;
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.information_dialog = Parser.parseItem(data.informationDialog);
    this.is_verified = data.isVerified;
    this.creator_custom_message = new Text(data.creatorCustomMessage);
  }
}