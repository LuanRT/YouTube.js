import Text from './misc/Text';
import { YTNode } from '../helpers';

class ThumbnailOverlayPlaybackStatus extends YTNode {
  static type = 'ThumbnailOverlayPlaybackStatus';

  constructor(data) {
    super();
    this.text = data.texts.map((text) => new Text(text))[0].toString();
  }
}

export default ThumbnailOverlayPlaybackStatus;