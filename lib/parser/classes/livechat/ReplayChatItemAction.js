import Parser from "../../index.js";

import { YTNode, ParserTypeSymbol } from "../..";

class ReplayChatItemAction extends YTNode {
    static [ParserTypeSymbol] = 'ReplayChatItemAction';
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
