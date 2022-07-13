import Parser from "../../index.js";

import { YTNode } from "../../helpers";

class ReplayChatItemAction extends YTNode {
    static type = 'ReplayChatItemAction';
    constructor(data) {
        super();
        this.actions = Parser.parse(data.actions?.map((action) => {
            delete action.clickTrackingParams;
            return action;
        })) || [];
        this.video_offset_time_msec = data.videoOffsetTimeMsec;
    }
}
export default ReplayChatItemAction;
