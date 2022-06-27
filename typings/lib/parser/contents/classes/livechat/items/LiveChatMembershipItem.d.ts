export = LiveChatMembershipItem;
declare class LiveChatMembershipItem {
    constructor(data: any);
    type: string;
    id: any;
    timestamp: number;
    header_subtext: Text;
    author: {
        id: any;
        name: Text;
        thumbnails: Thumbnail[];
        badges: any;
    };
    menu_endpoint: NavigationEndpoint;
}
import Text = require("../../Text");
import Thumbnail = require("../../Thumbnail");
import NavigationEndpoint = require("../../NavigationEndpoint");
