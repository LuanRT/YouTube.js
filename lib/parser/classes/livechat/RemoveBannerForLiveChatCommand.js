
import { YTNode, ParserTypeSymbol } from "../..";

class RemoveBannerForLiveChatCommand extends YTNode {
    static [ParserTypeSymbol] = 'RemoveBannerForLiveChatCommand';
    constructor(data) {
        super();
        this.target_action_id = data.targetActionId;
    }
}
export default RemoveBannerForLiveChatCommand;
