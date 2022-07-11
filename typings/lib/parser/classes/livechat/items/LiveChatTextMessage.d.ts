export = LiveChatTextMessage;
declare class LiveChatTextMessage {
    constructor(data: any);
    type: string;
    message: Text;
    author: {
        id: any;
        name: Text;
        thumbnails: Thumbnail[];
    };
    menu_endpoint: NavigationEndpoint;
    timestamp: number;
    id: any;
}
import Text = require("../../Text");
import Thumbnail = require("../../Thumbnail");
import NavigationEndpoint = require("../../NavigationEndpoint");
