export = VideoOwner;
declare class VideoOwner {
    constructor(data: any);
    type: string;
    name: Text;
    thumbnails: any;
    subscription_button: any;
    endpoint: NavigationEndpoint;
    subscriber_count: Text;
    badges: any;
    is_verified: any;
    is_verified_artist: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
