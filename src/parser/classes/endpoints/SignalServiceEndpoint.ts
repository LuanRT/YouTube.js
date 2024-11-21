import { type ObservedArray, YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class SignalServiceEndpoint extends YTNode {
  static type = 'SignalServiceEndpoint';

  public actions?: ObservedArray<YTNode>;
  public signal?: string;

  constructor(data: RawNode) {
    super();
    if (Array.isArray(data.actions)) {
      this.actions = Parser.parseArray(data.actions.map((action: RawNode) => {
        delete action.clickTrackingParams;
        return action;
      }));
    }
    this.signal = data.signal;
  }
}