import Parser from "../index.js";
import Text from "./misc/Text.js";
import NavigationEndpoint from "./NavigationEndpoint.js";

import { YTNode } from "../helpers";

class MusicShelf extends YTNode {
    static type = 'MusicShelf';
    constructor(data) {
        super();
        this.title = new Text(data.title).toString();
        this.contents = Parser.parse(data.contents);
        if (data.bottomEndpoint) {
            this.endpoint = new NavigationEndpoint(data.bottomEndpoint);
        }
        if (data.continuations) {
            // TODO: type this
            this.continuation = data.continuations?.[0].nextContinuationData.continuation;
        }
        if (data.bottomText) {
            this.bottom_text = new Text(data.bottomText);
        }
    }
}
export default MusicShelf;
