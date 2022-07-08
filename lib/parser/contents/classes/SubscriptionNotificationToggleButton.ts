'use strict';

import Parser from '..';

class SubscriptionNotificationToggleButton {
  type = 'SubscriptionNotificationToggleButton';

  constructor(data) {
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