import type { RawNode } from '../../index.js';
import Text from './Text.js';

export default class SubscriptionButton {
  static type = 'SubscriptionButton';

  public text?: Text;
  public subscribed?: boolean;
  public subscription_type?: 'FREE' | 'PAID' | 'UNAVAILABLE';

  constructor(data: RawNode) {
    if ('text' in data) {
      this.text = new Text(data.text);
    }

    if ('subscribed' in data) {
      this.subscribed = data.subscribed;
    }

    if ('type' in data) {
      this.subscription_type = data.type;
    }
  }
}