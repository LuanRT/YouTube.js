import Parser from "../index.js";
import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class Notification extends YTNode {
    static type = 'Notification';
    constructor(data) {
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
        this.short_message = new Text(data.shortMessage);
        this.sent_time = new Text(data.sentTimeText);
        this.notification_id = data.notificationId;
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.record_click_endpoint = new NavigationEndpoint(data.recordClickEndpoint);
        this.menu = Parser.parse(data.contextualMenu);
        this.read = data.read;
    }
}
export default Notification;
