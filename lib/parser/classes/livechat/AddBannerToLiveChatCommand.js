import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class AddBannerToLiveChatCommand extends YTNode {
    static [ParserTypeSymbol] = 'AddBannerToLiveChatCommand';
    constructor(data) {
        super();
        return Parser.parse(data.bannerRenderer);
    }
}
export default AddBannerToLiveChatCommand;
