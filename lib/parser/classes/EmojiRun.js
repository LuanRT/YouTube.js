import Thumbnail from "./misc/Thumbnail";

import { YTNode } from "../helpers";

class EmojiRun extends YTNode {
    static type = 'EmojiRun';
    constructor(data) {
        super();
        this.text =
            data.emoji?.emojiId ||
                data.emoji?.shortcuts?.[0] || null;
        this.emoji = {
            emoji_id: data.emoji.emojiId,
            shortcuts: data.emoji.shortcuts,
            search_terms: data.emoji.searchTerms,
            image: Thumbnail.fromResponse(data.emoji.image)
        };
    }
}
export default EmojiRun;
