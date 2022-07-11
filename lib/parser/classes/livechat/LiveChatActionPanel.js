import Parser from "../../index.js";

class LiveChatActionPanel {
    type = 'LiveChatActionPanel';
    constructor(data) {
        this.id = data.id;
        this.contents = Parser.parse(data.contents);
        this.target_id = data.targetId;
    }
}
export default LiveChatActionPanel;
