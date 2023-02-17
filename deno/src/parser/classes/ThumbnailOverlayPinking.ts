import { YTNode } from '../helpers.ts';

class ThumbnailOverlayPinking extends YTNode {
  static type = 'ThumbnailOverlayPinking';

  hack: boolean;

  constructor(data: any) {
    super();
    this.hack = data.hack;
  }
}

export default ThumbnailOverlayPinking;