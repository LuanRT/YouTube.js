import Parser from "../index.js";
import Text from "./misc/Text.js";
import Thumbnail from "./Thumbnail.js";

import { YTNode, ParserTypeSymbol } from "..";

class LiveChatParticipant extends YTNode {
    static [ParserTypeSymbol] = 'LiveChatParticipant';
    constructor(data) {
        super();
        this.name = new Text(data.authorName);
        this.photo = Thumbnail.fromResponse(data.authorPhoto);
        this.badges = Parser.parse(data.authorBadges);
    }
}
export default LiveChatParticipant;
