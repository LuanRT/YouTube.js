import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscriptionNotificationToggleButton from './SubscriptionNotificationToggleButton.js';
import Text from './misc/Text.js';

export default class SubscribeButton extends YTNode {
  static type = 'SubscribeButton';

  public button_text: Text;
  public subscribed: boolean;
  public enabled: boolean;
  public item_type: string;
  public channel_id: string;
  public show_preferences: boolean;
  public subscribed_text: Text;
  public unsubscribed_text: Text;
  public notification_preference_button: SubscriptionNotificationToggleButton | null;
  public service_endpoints?: NavigationEndpoint[];
  public on_subscribe_endpoints?: NavigationEndpoint[];
  public on_unsubscribe_endpoints?: NavigationEndpoint[];
  public subscribed_entity_key?: string;
  public target_id?: string;
  public subscribe_accessibility_label?: string;
  public unsubscribe_accessibility_label?: string;

  constructor(data: RawNode) {
    super();
    this.button_text = new Text(data.buttonText);
    this.subscribed = data.subscribed;
    this.enabled = data.enabled;
    this.item_type = data.type;
    this.channel_id = data.channelId;
    this.show_preferences = data.showPreferences;
    this.subscribed_text = new Text(data.subscribedButtonText);
    this.unsubscribed_text = new Text(data.unsubscribedButtonText);
    this.notification_preference_button = Parser.parseItem(data.notificationPreferenceButton, SubscriptionNotificationToggleButton);

    if (Reflect.has(data, 'serviceEndpoints'))
      this.service_endpoints = data.serviceEndpoints.map((endpoint: RawNode) => Parser.parseItem(endpoint, NavigationEndpoint));

    if (Reflect.has(data, 'onSubscribeEndpoints'))
      this.on_subscribe_endpoints = data.onSubscribeEndpoints.map((endpoint: RawNode) => Parser.parseItem(endpoint, NavigationEndpoint));

    if (Reflect.has(data, 'onUnsubscribeEndpoints'))
      this.on_unsubscribe_endpoints = data.onUnsubscribeEndpoints.map((endpoint: RawNode) => Parser.parseItem(endpoint, NavigationEndpoint));

    if (Reflect.has(data, 'subscribedEntityKey'))
      this.subscribed_entity_key = data.subscribedEntityKey;

    if (Reflect.has(data, 'targetId'))
      this.target_id = data.targetId;

    if (Reflect.has(data, 'subscribeAccessibility'))
      this.subscribe_accessibility_label = data.subscribeAccessibility.accessibilityData?.label;

    if (Reflect.has(data, 'unsubscribeAccessibility'))
      this.unsubscribe_accessibility_label = data.unsubscribeAccessibility.accessibilityData?.label;
  }
}