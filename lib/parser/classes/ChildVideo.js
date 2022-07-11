import NavigationEndpoint from "./NavigationEndpoint.js";
import Utils from "../../utils/Utils.js";
import Text from "./Text.js";

class ChildVideo {
    type = 'ChildVideo';
    constructor(data) {
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
