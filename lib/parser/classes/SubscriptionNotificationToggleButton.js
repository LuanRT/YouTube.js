import Parser from "../index.js";

import { YTNode } from "../helpers";

class SubscriptionNotificationToggleButton extends YTNode {
    static type = 'SubscriptionNotificationToggleButton';
    constructor(data) {
        super();
        this.states = data.states.map((state) => ({
            id: state.stateId,
            next_id: state.nextStateId,
            state: Parser.parse(state.state)
        }));
        this.current_state_id = data.currentStateId;
        this.target_id = data.targetId;
    }
}
export default SubscriptionNotificationToggleButton;
