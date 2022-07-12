import Parser from "../../index.js";

import { YTNode } from "../..";

class AddBannerToLiveChatCommand extends YTNode {
    static type = 'AddBannerToLiveChatCommand';
    constructor(data) {
        super();
        return Parser.parse(data.bannerRenderer);
    }
}
export default AddBannerToLiveChatCommand;
