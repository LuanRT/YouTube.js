import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class ThumbnailOverlayNowPlaying extends YTNode {
  static type = 'ThumbnailOverlayNowPlaying';

  text: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}

export default ThumbnailOverlayNowPlaying;