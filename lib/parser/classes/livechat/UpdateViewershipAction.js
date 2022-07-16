import Text from "../misc/Text";

import { YTNode } from "../../helpers";

class UpdateViewershipAction extends YTNode {
    static type = 'UpdateViewershipAction';
    constructor(data) {
        super();
        const view_count_renderer = data.viewCount.videoViewCountRenderer;
        this.view_count = new Text(view_count_renderer.viewCount);
        this.extra_short_view_count = new Text(view_count_renderer.extraShortViewCount);
        this.is_live = view_count_renderer.isLive;
    }
}
export default UpdateViewershipAction;
