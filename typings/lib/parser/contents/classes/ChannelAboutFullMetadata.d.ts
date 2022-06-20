export = ChannelAboutFullMetadata;
declare class ChannelAboutFullMetadata {
    constructor(data: any);
    type: string;
    id: any;
    name: Text;
    avatar: Thumbnail[];
    canonical_channel_url: any;
    views: Text;
    joined: Text;
    description: Text;
    email_reveal: NavigationEndpoint;
    can_reveal_email: boolean;
    country: Text;
    buttons: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import NavigationEndpoint = require("./NavigationEndpoint");
