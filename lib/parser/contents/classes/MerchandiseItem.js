'use strict';

const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class MerchandiseItem {
  type = 'merchandiseItemRenderer';
  
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
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

module.exports = MerchandiseItem;