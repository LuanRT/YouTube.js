import Text from "../../misc/Text.js";
import Thumbnail from "../../Thumbnail.js";
import NavigationEndpoint from "../../NavigationEndpoint.js";
import Parser from "../../../index.js";

class LiveChatTextMessage {
    static #type = Symbol('LiveChatTextMessage');
    static get type() { return this.#type }
    constructor(data) {
        this.message = new Text(data.message);
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text(data.authorName),
            thumbnails: Thumbnail.fromResponse(data.authorPhoto)
        };
        const badges = Parser.parse(data.authorBadges);
        this.author.badges = badges;
        this.author.is_moderator = badges?.some((badge) => badge.icon_type == 'MODERATOR') || null;
        this.author.is_verified = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') || null;
        this.author.is_verified_artist = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') || null;
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
        this.id = data.id;
    }
}
export default LiveChatTextMessage;
