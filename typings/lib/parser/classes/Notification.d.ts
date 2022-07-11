export = Notification;
declare class Notification {
    constructor(data: any);
    type: string;
    thumbnails: Thumbnail[];
    video_thumbnails: Thumbnail[];
    short_message: Text;
    sent_time: Text;
    notification_id: any;
    endpoint: NavigationEndpoint;
    record_click_endpoint: NavigationEndpoint;
    menu: any;
    read: any;
}
import Thumbnail = require("./Thumbnail");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
