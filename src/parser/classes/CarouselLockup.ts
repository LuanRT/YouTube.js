import { type ObservedArray, YTNode } from '../helpers.js';
import InfoRow from './InfoRow.js';
import { Parser, type RawNode } from '../index.js';
import CompactVideo from './CompactVideo.js';

export default class CarouselLockup extends YTNode {
  static type = 'CarouselLockup';

  info_rows: ObservedArray<InfoRow>;
  video_lockup?: CompactVideo | null;

  constructor(data: RawNode) {
    super();
    this.info_rows = Parser.parseArray(data.infoRows, InfoRow);
    this.video_lockup = Parser.parseItem(data.videoLockup, CompactVideo);
  }
}
