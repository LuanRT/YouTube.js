import Text from "../../misc/Text.js";
import Thumbnail from "../../Thumbnail.js";

class LiveChatTickerSponsorItem {
    static #type = Symbol('LiveChatTickerSponsorItem');
    static get type() { return this.#type }
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
