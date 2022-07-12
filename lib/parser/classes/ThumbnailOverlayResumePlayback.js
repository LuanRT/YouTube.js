
import { YTNode, ParserTypeSymbol } from "..";

class ThumbnailOverlayResumePlayback extends YTNode {
    static [ParserTypeSymbol] = 'ThumbnailOverlayResumePlayback';
    constructor(data) {
        super();
        this.percent_duration_watched = data.percentDurationWatched;
    }
}
export default ThumbnailOverlayResumePlayback;
