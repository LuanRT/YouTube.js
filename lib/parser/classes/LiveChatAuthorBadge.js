import MetadataBadge from "./MetadataBadge.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class LiveChatAuthorBadge extends MetadataBadge extends YTNode {
    static [ParserTypeSymbol] = 'LiveChatAuthorBadge';
    constructor(data) {
        super();
        super(data);
        this.custom_thumbnail = data.customThumbnail ? Thumbnail.fromResponse(data.customThumbnail) : null;
    }
}
export default LiveChatAuthorBadge;
