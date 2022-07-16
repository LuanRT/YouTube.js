import Parser from "../../index";

import { YTNode } from "../../helpers";

class ShowLiveChatTooltipCommand extends YTNode {
    static type = 'ShowLiveChatTooltipCommand';
    constructor(data) {
        super();
        this.tooltip = Parser.parse(data.tooltip);
    }
}
export default ShowLiveChatTooltipCommand;
