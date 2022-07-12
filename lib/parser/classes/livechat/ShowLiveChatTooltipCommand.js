import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class ShowLiveChatTooltipCommand extends YTNode {
    static [ParserTypeSymbol] = 'ShowLiveChatTooltipCommand';
    constructor(data) {
        super();
        this.tooltip = Parser.parse(data.tooltip);
    }
}
export default ShowLiveChatTooltipCommand;
