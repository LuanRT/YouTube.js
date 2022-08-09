import Text from './misc/Text';
import { YTNode } from '../helpers';

class ThumbnailOverlayNowPlaying extends YTNode {
  static type = 'ThumbnailOverlayNowPlaying';
  
  text: string;
  
  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}

export default ThumbnailOverlayNowPlaying;