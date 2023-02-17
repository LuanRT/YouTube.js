import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class ThumbnailOverlayPlaybackStatus extends YTNode {
  static type = 'ThumbnailOverlayPlaybackStatus';

  text: string;

  constructor(data: any) {
    super();
    this.text = data.texts.map((text: any) => new Text(text))[0].toString();
  }
}

export default ThumbnailOverlayPlaybackStatus;