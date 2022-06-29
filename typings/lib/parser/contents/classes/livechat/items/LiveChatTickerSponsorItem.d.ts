export = LiveChatTickerSponsorItem;
declare class LiveChatTickerSponsorItem {
    constructor(data: any);
    type: string;
    id: any;
    detail_text: any;
    author: {
        id: any;
        name: Text;
        thumbnails: Thumbnail[];
    };
    duration_sec: any;
}
import Text = require("../../Text");
import Thumbnail = require("../../Thumbnail");
