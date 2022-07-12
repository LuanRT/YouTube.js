import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class OpenPopupAction extends YTNode {
    static [ParserTypeSymbol] = 'OpenPopupAction';
    constructor(data) {
        super();
        this.popup = Parser.parse(data.popup);
        this.popup_type = data.popupType;
    }
}
export default OpenPopupAction;
