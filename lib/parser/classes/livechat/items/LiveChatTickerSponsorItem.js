import Text from "../../misc/Text";
import Thumbnail from "../../misc/Thumbnail";

import { YTNode } from "../../../helpers"; 
class LiveChatTickerSponsorItem extends YTNode {
    static type = 'LiveChatTickerSponsorItem';
    constructor(data) {
        this.id = data.id;
        this.detail_text = new Text(data.detailText).toString();
        this.author = {
            id: data.authorExternalChannelId,
            name: new Text(data?.authorName),
            thumbnails: Thumbnail.fromResponse(data.sponsorPhoto)
        };
        this.duration_sec = data.durationSec;
        // TODO: finish this
        // Console.log(data)
    }
}
export default LiveChatTickerSponsorItem;
