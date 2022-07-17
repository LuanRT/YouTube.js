import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class MerchandiseItem extends YTNode {
  static type = 'MerchandiseItem';
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.price = data.price;
    this.vendor_name = data.vendorName;
    this.button_text = data.buttonText;
    this.button_accessibility_text = data.buttonAccessibilityText;
    this.from_vendor_text = data.fromVendorText;
    this.additional_fees_text = data.additionalFeesText;
    this.region_format = data.regionFormat;
    this.endpoint = new NavigationEndpoint(data.buttonCommand);
  }
}
export default MerchandiseItem;
