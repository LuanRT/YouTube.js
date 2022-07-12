import Parser from "../index.js";
import Thumbnail from "./Thumbnail.js";
import NavigationEndpoint from "./NavigationEndpoint.js";
import Text from "./misc/Text.js";

import { YTNode } from "..";

class EndscreenElement extends YTNode {
    static #type = Symbol('EndscreenElement');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.style = data.style;
        this.title = new Text(data.title);
        this.endpoint = new NavigationEndpoint(data.endpoint);
        if (data.image) {
            this.image = Thumbnail.fromResponse(data.image);
        }
        if (data.icon) {
            this.icon = Thumbnail.fromResponse(data.icon);
        }
        if (data.metadata) {
            this.metadata = new Text(data.metadata);
        }
        if (data.callToAction) {
            this.call_to_action = new Text(data.callToAction);
        }
        if (data.hovercardButton) {
            this.hovercard_button = Parser.parse(data.hovercardButton);
        }
        if (data.isSubscribe) {
            this.is_subscribe = data.isSubscribe;
        }
        this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
        this.left = data.left;
        this.width = data.width;
        this.top = data.top;
        this.aspect_ratio = data.aspectRatio;
        this.start_ms = data.startMs;
        this.end_ms = data.endMs;
        this.id = data.id;
    }
}
export default EndscreenElement;
