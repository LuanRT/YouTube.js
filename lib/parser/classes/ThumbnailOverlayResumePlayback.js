
import { YTNode } from "..";

class ThumbnailOverlayResumePlayback extends YTNode {
    static #type = Symbol('ThumbnailOverlayResumePlayback');
    static get type() { return this.#type }
    constructor(data) {
        super();
        this.percent_duration_watched = data.percentDurationWatched;
    }
}
export default ThumbnailOverlayResumePlayback;
