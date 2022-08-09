import Parser from '../index';
import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class SubscribeButton extends YTNode {
  static type = 'SubscribeButton';

  title: Text;
  subscribed: boolean;
  enabled: boolean;
  item_type: string;
  channel_id: string;
  show_preferences: boolean;
  subscribed_text: Text;
  unsubscribed_text: Text;
  notification_preference_button;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.title = new Text(data.buttonText);
    this.subscribed = data.subscribed;
    this.enabled = data.enabled;
    this.item_type = data.type;
    this.channel_id = data.channelId;
    this.show_preferences = data.showPreferences;
    this.subscribed_text = new Text(data.subscribedButtonText);
    this.unsubscribed_text = new Text(data.unsubscribedButtonText);
    this.notification_preference_button = Parser.parse(data.notificationPreferenceButton);
    this.endpoint = new NavigationEndpoint(data.serviceEndpoints?.[0] || data.onSubscribeEndpoints?.[0]);
  }
}

export default SubscribeButton;