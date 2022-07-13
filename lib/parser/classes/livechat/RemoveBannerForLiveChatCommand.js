
import { YTNode } from "../../helpers";

class RemoveBannerForLiveChatCommand extends YTNode {
    static type = 'RemoveBannerForLiveChatCommand';
    constructor(data) {
        super();
        this.target_action_id = data.targetActionId;
    }
}
export default RemoveBannerForLiveChatCommand;
