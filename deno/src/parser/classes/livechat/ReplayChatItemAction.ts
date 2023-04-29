import Parser from '../../index.ts';
import { type ObservedArray, YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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