import NavigationEndpoint from "./NavigationEndpoint.js";
import Utils from "../../utils/Utils.js";
import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class ChildVideo extends YTNode {
    static [ParserTypeSymbol] = 'ChildVideo';
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.duration = {
            text: data.lengthText.simpleText,
            seconds: Utils.timeToSeconds(data.lengthText.simpleText)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default ChildVideo;
