export = ChannelAboutFullMetadata;
declare class ChannelAboutFullMetadata {
    constructor(data: any);
    type: string;
    id: any;
    canonical_channel_url: any;
    author: Author;
    views: Text;
    joined: Text;
    description: Text;
    email_reveal: NavigationEndpoint;
    can_reveal_email: boolean;
    country: Text;
}
import Author = require("./Author");
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
