import { type ObservedArray, YTNode } from '../helpers.ts';
import InfoRow from './InfoRow.ts';
import Parser, { type RawNode } from '../index.ts';
import CompactVideo from './CompactVideo.ts';

export default class CarouselLockup extends YTNode {
  static type = 'CarouselLockup';

  info_rows: ObservedArray<InfoRow>;
  video_lockup?: CompactVideo;

  constructor(data: RawNode) {
    super();
    this.info_rows = Parser.parseArray(data.infoRows, InfoRow);
    const video_lockup = Parser.parseItem(data.videoLockup, CompactVideo);
    if (video_lockup != null) {
      this.video_lockup = video_lockup;
    }
  }
}
