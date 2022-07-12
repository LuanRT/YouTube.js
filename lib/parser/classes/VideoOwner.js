import Text from "./misc/Text.js";
import Author from "./misc/Author.js";

import { YTNode } from "..";

class VideoOwner extends YTNode {
    static #type = Symbol('VideoOwner');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.subscription_button = data.subscriptionButton || null;
        this.subscriber_count = new Text(data.subscriberCountText);
        this.author = new Author({
            ...data.title,
            navigationEndpoint: data.navigationEndpoint
        }, data.badges, data.thumbnail);
    }
}
export default VideoOwner;
