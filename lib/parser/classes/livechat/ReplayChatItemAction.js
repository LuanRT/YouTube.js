import Parser from "../../index.js";

class ReplayChatItemAction {
    type = 'ReplayChatItemAction';
    constructor(data) {
        this.actions = Parser.parse(data.actions?.map((action) => {
            delete action.clickTrackingParams;
            return action;
        })) || [];
        this.video_offset_time_msec = data.videoOffsetTimeMsec;
    }
}
export default ReplayChatItemAction;
