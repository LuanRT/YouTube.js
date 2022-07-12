import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class DidYouMean extends YTNode {
    static #type = Symbol('DidYouMean');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default DidYouMean;
