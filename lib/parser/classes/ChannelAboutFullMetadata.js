import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./misc/Text.js";
import Parser from "../index.js";

import { YTNode } from "..";

class ChannelAboutFullMetadata extends YTNode {
    static type = 'ChannelAboutFullMetadata';
    constructor(data) {
        super();
        this.id = data.channelId;
        this.name = new Text(data.title);
        this.avatar = Thumbnail.fromResponse(data.avatar);
        this.canonical_channel_url = data.canonicalChannelUrl;
        this.views = new Text(data.viewCountText);
        this.joined = new Text(data.joinedDateText);
        this.description = new Text(data.description);
        this.email_reveal = new NavigationEndpoint(data.onBusinessEmailRevealClickCommand);
        this.can_reveal_email = !data.signInForBusinessEmail;
        this.country = new Text(data.country);
        this.buttons = Parser.parse(data.actionButtons);
    }
}
export default ChannelAboutFullMetadata;
