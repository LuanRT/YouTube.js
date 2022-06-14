export = MerchandiseItem;
declare class MerchandiseItem {
    constructor(data: any);
    type: string;
    title: any;
    description: any;
    thumbnails: any;
    price: any;
    vendor_name: any;
    button_text: any;
    button_accessibility_text: any;
    from_vendor_text: any;
    additional_fees_text: any;
    region_format: any;
    endpoint: NavigationEndpoint;
}
import NavigationEndpoint = require("./NavigationEndpoint");
