import Parser from "../../index.js";

import { YTNode } from "../../helpers";

class AddBannerToLiveChatCommand extends YTNode {
    static type = 'AddBannerToLiveChatCommand';
    constructor(data) {
        super();
        return Parser.parse(data.bannerRenderer);
    }
}
export default AddBannerToLiveChatCommand;
