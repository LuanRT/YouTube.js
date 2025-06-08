import type { RawNode } from '../../index.js';
import Text from './Text.js';

export default class SubscriptionButton {
  static type = 'SubscriptionButton';

  public text: Text;
  public subscribed: boolean;
  public subscription_type?: 'FREE' | 'PAID' | 'UNAVAILABLE';

  constructor(data: RawNode) {
    this.text = new Text(data.text);
    this.subscribed = data.isSubscribed;
    if ('subscriptionType' in data)
      this.subscription_type = data.subscriptionType;
  }
}