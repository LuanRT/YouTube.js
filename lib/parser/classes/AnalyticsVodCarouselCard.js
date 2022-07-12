import Video from "./AnalyticsVideo.js";

import { YTNode, ParserTypeSymbol } from "..";

class AnalyticsVodCarouselCard extends YTNode {
    static [ParserTypeSymbol] = 'AnalyticsVodCarouselCard';
    constructor(data) {
        super();
        this.title = data.title;
        this.videos = data.videoCarouselData.videos.map((video) => new Video(video));
    }
}
export default AnalyticsVodCarouselCard;
