'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class SubscribeButton {
  type = 'subscribeButtonRenderer';
  
  constructor(data) {
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

module.exports = SubscribeButton;