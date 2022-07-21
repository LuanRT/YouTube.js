import Parser from '../index';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class SubscribeButton extends YTNode {
  static type = 'SubscribeButton';

  constructor(data) {
    super();
    this.title = new Text(data.buttonText);
    this.subscribed = data.subscribed;
    this.enabled = data.enabled;
    this.type = data.type;
    this.channel_id = data.channelId;
    this.show_preferences = data.showPreferences;
    this.subscribed_text = new Text(data.subscribedButtonText);
    this.unsubscribed_text = new Text(data.unsubscribedButtonText);
    this.notification_preference_button = Parser.parse(data.notificationPreferenceButton);
    this.endpoint = new NavigationEndpoint(data.serviceEndpoints?.[0] || data.onSubscribeEndpoints?.[0]);
  }
}

export default SubscribeButton;