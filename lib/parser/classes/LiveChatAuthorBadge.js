import MetadataBadge from "./MetadataBadge.js";
import Thumbnail from "./misc/Thumbnail.js";

import { YTNode } from "../helpers";

class LiveChatAuthorBadge extends MetadataBadge {
    static type = 'LiveChatAuthorBadge';
    constructor(data) {
                super(data);
        this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
    }
}
export default LiveChatAuthorBadge;
