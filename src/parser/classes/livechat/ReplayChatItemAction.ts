import { Parser } from '../../index.js';
import { type ObservedArray, YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ReplayChatItemAction extends YTNode {
  static type = 'ReplayChatItemAction';

  actions: ObservedArray<YTNode>;
  video_offset_time_msec: string;

  constructor(data: RawNode) {
    super();
    this.actions = Parser.parseArray(data.actions?.map((action: RawNode) => {
      delete action.clickTrackingParams;
      return action;
    }));

    this.video_offset_time_msec = data.videoOffsetTimeMsec;
  }
}