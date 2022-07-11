export = LiveChatPaidSticker;
declare class LiveChatPaidSticker {
    constructor(data: any);
    type: string;
    id: any;
    author: {
        id: any;
        name: Text;
        thumbnails: Thumbnail[];
        badges: any;
    };
    sticker: Thumbnail[];
    purchase_amount: any;
    context_menu: NavigationEndpoint;
    timestamp: number;
}
import Text = require("../../Text");
import Thumbnail = require("../../Thumbnail");
import NavigationEndpoint = require("../../NavigationEndpoint");
