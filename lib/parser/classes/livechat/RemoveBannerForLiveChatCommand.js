
import { YTNode } from "../..";

class RemoveBannerForLiveChatCommand extends YTNode {
    static #type = Symbol('RemoveBannerForLiveChatCommand');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.target_action_id = data.targetActionId;
    }
}
export default RemoveBannerForLiveChatCommand;
