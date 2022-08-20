import Text from './misc/Text';
import { YTNode } from '../helpers';

class ThumbnailOverlayPlaybackStatus extends YTNode {
  static type = 'ThumbnailOverlayPlaybackStatus';

  text: string;

  constructor(data: any) {
    super();
    this.text = data.texts.map((text: any) => new Text(text))[0].toString();
  }
}

export default ThumbnailOverlayPlaybackStatus;