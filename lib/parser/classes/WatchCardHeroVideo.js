import Parser from "../index.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class WatchCardHeroVideo extends YTNode {
    static #type = Symbol('WatchCardHeroVideo');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.call_to_action_button = Parser.parse(data.callToActionButton);
        this.hero_image = Parser.parse(data.heroImage);
        this.label = data.accessibility.accessibilityData.label;
    }
}
export default WatchCardHeroVideo;
