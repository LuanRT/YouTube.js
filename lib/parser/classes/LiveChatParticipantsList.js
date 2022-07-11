import Parser from "../index.js";
import Text from "./Text.js";

class LiveChatParticipantsList {
    type = 'LiveChatParticipantsList';
    constructor(data) {
        this.title = new Text(data.title);
        this.participants = Parser.parse(data.participants);
    }
}
export default LiveChatParticipantsList;
