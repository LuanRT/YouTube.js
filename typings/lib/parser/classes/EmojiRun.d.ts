export = EmojiRun;
declare class EmojiRun {
    constructor(data: any);
    text: any;
    emoji: {
        emoji_id: any;
        shortcuts: any;
        search_terms: any;
        image: Thumbnail[];
    };
}
import Thumbnail = require("./Thumbnail");
