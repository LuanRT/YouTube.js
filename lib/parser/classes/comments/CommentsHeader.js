import Parser from "../../index.js";
import Text from "../misc/Text.js";
import Thumbnail from "../Thumbnail.js";

import { YTNode } from "../..";

class CommentsHeader extends YTNode {
    static #type = Symbol('CommentsHeader');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = new Text(data.titleText);
        this.count = new Text(data.countText);
        this.comments_count = new Text(data.commentsCount);
        this.create_renderer = Parser.parse(data.createRenderer, 'comments');
        this.sort_menu = Parser.parse(data.sortMenu);
        this.custom_emojis = data.customEmojis?.map((emoji) => ({
            emoji_id: emoji.emojiId,
            shortcuts: emoji.shortcuts,
            search_terms: emoji.searchTerms,
            image: Thumbnail.fromResponse(emoji.image),
            is_custom_emoji: emoji.isCustomEmoji
        })) || null;
    }
}
export default CommentsHeader;
