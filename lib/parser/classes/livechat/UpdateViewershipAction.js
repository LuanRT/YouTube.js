import Text from "../misc/Text.js";

import { YTNode } from "../..";

class UpdateViewershipAction extends YTNode {
    static #type = Symbol('UpdateViewershipAction');
    static get type() { return this.#type }
    constructor(data) {
        super();
        const view_count_renderer = data.viewCount.videoViewCountRenderer;
        this.view_count = new Text(view_count_renderer.viewCount);
        this.extra_short_view_count = new Text(view_count_renderer.extraShortViewCount);
        this.is_live = view_count_renderer.isLive;
    }
}
export default UpdateViewershipAction;
