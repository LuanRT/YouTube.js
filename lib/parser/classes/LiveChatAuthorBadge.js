import MetadataBadge from "./MetadataBadge.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode } from "..";

class LiveChatAuthorBadge extends MetadataBadge extends YTNode {
    static type = 'LiveChatAuthorBadge';
    constructor(data) {
        super();
        super(data);
        this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
    }
}
export default LiveChatAuthorBadge;
