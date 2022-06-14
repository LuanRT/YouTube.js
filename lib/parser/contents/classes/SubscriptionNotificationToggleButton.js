'use strict';

const Parser = require('..');

class SubscriptionNotificationToggleButton {
  type = 'subscriptionNotificationToggleButtonRenderer';
  
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

module.exports = SubscriptionNotificationToggleButton;