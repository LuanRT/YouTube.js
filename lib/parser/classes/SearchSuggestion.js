import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "..";

class SearchSuggestion extends YTNode {
    static #type = Symbol('SearchSuggestion');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.suggestion = new Text(data.suggestion);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.icon_type = data.icon.iconType;
        if (data.serviceEndpoint) {
            this.service_endpoint = new NavigationEndpoint(data.serviceEndpoint);
        }
    }
}
export default SearchSuggestion;
