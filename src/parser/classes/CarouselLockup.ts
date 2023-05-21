import { type ObservedArray, YTNode } from '../helpers.js';
import InfoRow from './InfoRow.js';
import Parser, { type RawNode } from '../index.js';
import CompactVideo from './CompactVideo.js';

export default class CarouselLockup extends YTNode {
  static type = 'CarouselLockup';

  info_rows: ObservedArray<InfoRow>;
  video_lockup?: CompactVideo;

  constructor(data: RawNode) {
    super();
    this.info_rows = data.infoRows.map((row: YTNode) => Parser.parseItem(row, InfoRow));
    const video_lockup = Parser.parseItem(data.videoLockup, CompactVideo);
    if (video_lockup != null) {
      this.video_lockup = video_lockup;
    }
  }
}
