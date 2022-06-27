export = LiveChatTickerPaidMessageItem;
declare class LiveChatTickerPaidMessageItem {
    constructor(data: any);
    type: string;
    author: {
        id: any;
        thumbnails: Thumbnail[];
        badges: any;
    };
    amount: Text;
    duration_sec: any;
    full_duration_sec: any;
    show_item: any;
    show_item_endpoint: NavigationEndpoint;
    id: any;
}
import Thumbnail = require("../../Thumbnail");
import Text = require("../../Text");
import NavigationEndpoint = require("../../NavigationEndpoint");
