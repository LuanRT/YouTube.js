import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class MusicNavigationButton extends YTNode {
    static #type = Symbol('MusicNavigationButton');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.button_text = new Text(data.buttonText).toString();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default MusicNavigationButton;
