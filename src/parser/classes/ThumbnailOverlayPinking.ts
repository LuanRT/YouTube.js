import { YTNode } from '../helpers.js';

class ThumbnailOverlayPinking extends YTNode {
  static type = 'ThumbnailOverlayPinking';

  hack: boolean;

  constructor(data: any) {
    super();
    this.hack = data.hack;
  }
}

export default ThumbnailOverlayPinking;