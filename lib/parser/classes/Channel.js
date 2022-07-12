import Author from "./misc/Author.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class Channel extends YTNode {
    static #type = Symbol('Channel');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.id = data.channelId;
        this.author = new Author({
            ...data.title,
            navigationEndpoint: data.navigationEndpoint
        }, data.ownerBadges, data.thumbnail);
        this.subscribers = new Text(data.subscriberCountText);
        this.videos = new Text(data.videoCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.description_snippet = new Text(data.descriptionSnippet);
    }
}
export default Channel;
