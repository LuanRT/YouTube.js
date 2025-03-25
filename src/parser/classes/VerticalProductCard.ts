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
    from_merchant_text: string;
    show_open_in_new_icon: boolean;
    use_new_style: boolean;
    deals_data: {
        current_price: string
    };
    cta_text: Text;
    cta_style: string;
    layout_style: string;

    constructor(data: RawNode) {
        super();
        this.title = data.title;
        this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.price = data.price;
        this.additional_fees_text = data.additionalFeesText;
        this.accessibility_title = data.accessibilityTitle;
        this.merchant_name = data.merchantName;
        this.from_merchant_text = data.fromMerchantText;
        this.show_open_in_new_icon = data.showOpenInNewIcon;
        this.use_new_style = data.useNewStyle;
        this.deals_data = {
            current_price: data.dealsData.currentPrice
        };
        this.cta_text = new Text(data.ctaText);
        this.cta_style = data.ctaStyle;
        this.layout_style = data.layoutStyle;
    }
}