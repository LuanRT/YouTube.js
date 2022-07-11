export = SubscribeButton;
declare class SubscribeButton {
    constructor(data: any);
    type: string;
    title: Text;
    subscribed: any;
    enabled: any;
    channel_id: any;
    show_preferences: any;
    subscribed_text: Text;
    unsubscribed_text: Text;
    notification_preference_button: any;
    endpoint: NavigationEndpoint;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
