import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class UpdateLiveChatPollAction extends YTNode {
    static [ParserTypeSymbol] = 'UpdateLiveChatPollAction';
    constructor(data) {
        super();
        this.poll_to_update = Parser.parse(data.pollToUpdate);
    }
}
export default UpdateLiveChatPollAction;
