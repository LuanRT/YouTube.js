import Parser from "../index.js";

import { YTNode } from "..";

class LiveChatHeader extends YTNode {
    static type = 'LiveChatHeader';
    constructor(data) {
        super();
        this.overflow_menu = Parser.parse(data.overflowMenu);
        this.collapse_button = Parser.parse(data.collapseButton);
        this.view_selector = Parser.parse(data.viewSelector);
    }
}
export default LiveChatHeader;
