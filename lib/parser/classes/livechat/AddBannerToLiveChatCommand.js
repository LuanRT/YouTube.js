import Parser from "../../index.js";

class AddBannerToLiveChatCommand {
    constructor(data) {
        return Parser.parse(data.bannerRenderer);
    }
}
export default AddBannerToLiveChatCommand;
