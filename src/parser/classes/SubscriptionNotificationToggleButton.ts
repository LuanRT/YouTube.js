import { Parser, type RawNode } from '../index.js';
import { type SuperParsedResult, YTNode } from '../helpers.js';

export default class SubscriptionNotificationToggleButton extends YTNode {
  static type = 'SubscriptionNotificationToggleButton';

  states: {
    id: string;
    next_id: string;
    state: SuperParsedResult<YTNode>;
  };

  current_state_id: string;
  target_id: string;

  constructor(data: any) {
    super();
    this.states = data.states.map((data: RawNode) => ({
      id: data.stateId,
      next_id: data.nextStateId,
      state: Parser.parse(data.state)
    }));

    this.current_state_id = data.currentStateId;
    this.target_id = data.targetId;
  }
}