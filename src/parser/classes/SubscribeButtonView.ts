import type { RawNode } from '../types/RawResponse.js';
import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';

interface ButtonContent {
  button_text: string;
  accessibility_text: string;
  image_name: string;
  subscribe_state_subscribed: boolean;
  endpoint: NavigationEndpoint;
}

export default class SubscribeButtonView extends YTNode {
  static type = 'SubscribeButtonView';

  public subscribe_button_content: ButtonContent;
  public unsubscribe_button_content: ButtonContent;
  public disable_notification_bell: boolean;
  public button_style: {
    unsubscribed_state_style: string;
    subscribed_state_style: string;
  };
  public is_signed_out: boolean;
  public background_style: string;
  public disable_subscribe_button: boolean;
  public on_show_subscription_options: NavigationEndpoint;
  public channel_id: string;
  public enable_subscribe_button_post_click_animation: boolean;
  public bell_accessiblity_data: {
    off_label: string;
    all_label: string;
    occasional_label: string;
    disabled_label: string;
  };

  constructor(data: RawNode) {
    super();

    this.subscribe_button_content = this.#parseButtonContent(data.subscribeButtonContent);
    this.unsubscribe_button_content = this.#parseButtonContent(data.unsubscribeButtonContent);

    this.disable_notification_bell = data.disableNotificationBell;
    this.button_style = {
      unsubscribed_state_style: data.buttonStyle.unsubscribedStateStyle,
      subscribed_state_style: data.buttonStyle.subscribedStateStyle
    };
    this.is_signed_out = data.isSignedOut;
    this.background_style = data.backgroundStyle;
    this.disable_subscribe_button = data.disableSubscribeButton;
    this.on_show_subscription_options = new NavigationEndpoint(data.onShowSubscriptionOptions);
    this.channel_id = data.channelId;
    this.enable_subscribe_button_post_click_animation = data.enableSubscribeButtonPostClickAnimation;
    this.bell_accessiblity_data = {
      off_label: data.bellAccessibilityData.offLabel,
      all_label: data.bellAccessibilityData.allLabel,
      occasional_label: data.bellAccessibilityData.occasionalLabel,
      disabled_label: data.bellAccessibilityData.disabledLabel
    };
  }

  #parseButtonContent(data: RawNode): ButtonContent {
    return {
      button_text: data.buttonText,
      accessibility_text: data.accessibilityText,
      image_name: data.imageName,
      subscribe_state_subscribed: data.subscribeState.subscribed,
      endpoint: new NavigationEndpoint(data.onTapCommand)
    };
  }
}