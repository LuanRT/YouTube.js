export = LiveChatPaidMessage;
declare class LiveChatPaidMessage {
    constructor(data: any);
    type: string;
    message: Text;
    author: {
        id: any;
        name: Text;
        thumbnails: Thumbnail[];
        badges: any;
    };
    purchase_amount: any;
    menu_endpoint: NavigationEndpoint;
    timestamp: number;
    timestamp_text: any;
    id: any;
}
import Text = require("../../Text");
import Thumbnail = require("../../Thumbnail");
import NavigationEndpoint = require("../../NavigationEndpoint");
