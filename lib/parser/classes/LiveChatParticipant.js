import Parser from "../index.js";
import Text from "./Text.js";
import Thumbnail from "./Thumbnail.js";

class LiveChatParticipant {
    type = 'LiveChatParticipant';
    constructor(data) {
        this.name = new Text(data.authorName);
        this.photo = Thumbnail.fromResponse(data.authorPhoto);
        this.badges = Parser.parse(data.authorBadges);
    }
}
export default LiveChatParticipant;
