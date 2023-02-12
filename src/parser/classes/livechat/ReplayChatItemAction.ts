import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';

class ReplayChatItemAction extends YTNode {
  static type = 'ReplayChatItemAction';

  actions;
  video_offset_time_msec: string; // Or number?

  constructor(data: any) {
    super();
    this.actions = Parser.parseArray(data.actions?.map((action: any) => {
      delete action.clickTrackingParams;
      return action;
    }));
    this.video_offset_time_msec = data.videoOffsetTimeMsec;
  }
}

export default ReplayChatItemAction;