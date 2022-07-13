import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "../helpers";

class LiveChatParticipantsList extends YTNode {
    static type = 'LiveChatParticipantsList';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.participants = Parser.parse(data.participants);
    }
}
export default LiveChatParticipantsList;
