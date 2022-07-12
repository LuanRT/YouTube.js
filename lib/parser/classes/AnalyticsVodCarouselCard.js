import Video from "./AnalyticsVideo.js";

import { YTNode } from "..";

class AnalyticsVodCarouselCard extends YTNode {
    static #type = Symbol('AnalyticsVodCarouselCard');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.title = data.title;
        this.videos = data.videoCarouselData.videos.map((video) => new Video(video));
    }
}
export default AnalyticsVodCarouselCard;
