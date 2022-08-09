import Text from './misc/Text';
import { YTNode } from '../helpers';

class ThumbnailOverlayTimeStatus extends YTNode {
  static type = 'ThumbnailOverlayTimeStatus';

  text: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
  }
}

export default ThumbnailOverlayTimeStatus;