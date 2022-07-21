import { YTNode } from '../helpers';

class ThumbnailOverlayPinking extends YTNode {
  static type = 'ThumbnailOverlayPinking';

  constructor(data) {
    super();
    this.hack = data.hack;
  }
}

export default ThumbnailOverlayPinking;