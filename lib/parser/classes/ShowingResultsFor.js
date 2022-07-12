import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class ShowingResultsFor extends YTNode {
    static #type = Symbol('ShowingResultsFor');
    static get type() {
        return this.#type;
    }
    constructor(data) {
        super();
        this.corrected_query = new Text(data.correctedQuery);
        this.endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
        this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
    }
}
export default ShowingResultsFor;
