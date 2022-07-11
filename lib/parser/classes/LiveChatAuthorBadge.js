import MetadataBadge from "./MetadataBadge.js";
import Thumbnail from "./Thumbnail.js";

class LiveChatAuthorBadge extends MetadataBadge {
    constructor(data) {
        super(data);
        this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
    }
}
export default LiveChatAuthorBadge;
