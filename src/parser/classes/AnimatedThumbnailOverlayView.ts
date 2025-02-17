import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';

export default class AnimatedThumbnailOverlayView extends YTNode {
  static type = 'AnimatedThumbnailOverlayView';

  thumbnail: {
    sources: {
      url: string,
      width: number,
      height: number
    }[]
  };

  constructor(data: RawNode) {
    super();
    this.thumbnail = {
      sources: data.thumbnail.sources.map((item: any) => ({
        url: item.url,
        width: item.width,
        height: item.height
      }))
    };
  }
}
