import Text from "./misc/Text.js";
import utils from "../../utils/Utils.js";

const { timeToSeconds } = utils;
import { YTNode, ParserTypeSymbol } from "..";

class WatchCardCompactVideo extends YTNode {
    static [ParserTypeSymbol] = 'WatchCardCompactVideo';
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.subtitle = new Text(data.subtitle);
        this.duration = {
            text: new Text(data.lengthText).toString(),
            seconds: timeToSeconds(data.lengthText.simpleText)
        };
        this.style = data.style;
    }
}
export default WatchCardCompactVideo;
