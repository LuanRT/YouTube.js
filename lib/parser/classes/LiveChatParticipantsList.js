import Parser from "../index";
import Text from "./misc/Text";

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
