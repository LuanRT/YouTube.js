import NavigationEndpoint from "./NavigationEndpoint.js";
import { timeToSeconds } from "../../utils/Utils.js";
import Text from "./misc/Text.js";

import { YTNode } from "../helpers";

class ChildVideo extends YTNode {
    static type = 'ChildVideo';
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.duration = {
            text: data.lengthText.simpleText,
            seconds: timeToSeconds(data.lengthText.simpleText)
        };
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    }
}
export default ChildVideo;
