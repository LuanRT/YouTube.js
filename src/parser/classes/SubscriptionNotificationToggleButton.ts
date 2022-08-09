import Parser from '../index';
import { YTNode } from '../helpers';

class SubscriptionNotificationToggleButton extends YTNode {
  static type = 'SubscriptionNotificationToggleButton';
  
  states: {
    id: string;
    next_id: string;
    state: any;
  }
  
  current_state_id: string;
  target_id: string;
  
  constructor(data: any) {
    super();
    this.states = data.states.map((data: any) => ({
      id: data.stateId,
      next_id: data.nextStateId,
      state: Parser.parse(data.state)
    }));

    this.current_state_id = data.currentStateId;
    this.target_id = data.targetId;
  }
}

export default SubscriptionNotificationToggleButton;