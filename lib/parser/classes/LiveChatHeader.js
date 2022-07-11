import Parser from "../index.js";

class LiveChatHeader {
    type = 'LiveChatHeader';
    constructor(data) {
        this.overflow_menu = Parser.parse(data.overflowMenu);
        this.collapse_button = Parser.parse(data.collapseButton);
        this.view_selector = Parser.parse(data.viewSelector);
    }
}
export default LiveChatHeader;
