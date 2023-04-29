import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ThumbnailOverlayResumePlayback extends YTNode {
  static type = 'ThumbnailOverlayResumePlayback';

  percent_duration_watched: string; // TODO: is this a number?

  constructor(data: RawNode) {
    super();
    this.percent_duration_watched = data.percentDurationWatched;
  }
}