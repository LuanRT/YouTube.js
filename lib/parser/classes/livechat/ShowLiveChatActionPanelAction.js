import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class ShowLiveChatActionPanelAction extends YTNode {
    static [ParserTypeSymbol] = 'ShowLiveChatActionPanelAction';
    constructor(data) {
        super();
        this.panel_to_show = Parser.parse(data.panelToShow);
    }
}
export default ShowLiveChatActionPanelAction;
