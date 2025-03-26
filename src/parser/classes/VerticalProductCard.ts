import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class VerticalProductCard extends YTNode {
  static type = 'VerticalProductCard';

  title: string;
  thumbnail: Thumbnail[];
  endpoint: NavigationEndpoint;
  price: string;
  additional_fees_text: string;
  accessibility_title: string;
  merchant_name: string;
  from_merchant_text?: string;
  show_open_in_new_icon: boolean;
  use_new_style: boolean;
  cta_text: Text;
  cta_style: string;
  layout_style: string;
  deals_data: {
    current_price: string,
    sales_data?: {
      original_price: string,
      sales_price_accessibility_label: string
    },
    sales?: {
      original_price: string,
      sales_price_accessibility_label: string
    }
  };
  price_replacement_text?: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.price = data.price;
    this.additional_fees_text = data.additionalFeesText;
    this.accessibility_title = data.accessibilityTitle;
    this.merchant_name = data.merchantName;
    this.from_merchant_text = Reflect.has(data, 'fromMerchantText') ? data.fromMerchantText : undefined;
    this.show_open_in_new_icon = data.showOpenInNewIcon;
    this.use_new_style = data.useNewStyle;
    this.cta_text = new Text(data.ctaText);
    this.cta_style = data.ctaStyle;
    this.layout_style = data.layoutStyle;
    this.deals_data = {
      current_price: data.dealsData.currentPrice,
      sales_data: Reflect.has(data.dealsData, 'salesData') ? {
        original_price: data.dealsData.salesData.originalPrice,
        sales_price_accessibility_label: data.dealsData.salesData.salesPriceAccessibilityLabel
      } : undefined,
      sales: Reflect.has(data.dealsData, 'sales') ? {
        original_price: data.dealsData.sales.originalPrice,
        sales_price_accessibility_label: data.dealsData.sales.salesPriceAccessibilityLabel
      } : undefined
    };
    this.price_replacement_text = Reflect.has(data, 'priceReplacementText') ? data.priceReplacementText : undefined;
  }
}