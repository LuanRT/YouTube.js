import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ThumbnailOverlayTimeStatus extends YTNode {
  static type = 'ThumbnailOverlayTimeStatus';

  text: string;
  style: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
    this.style = data.style;
  }
}

export default ThumbnailOverlayTimeStatus;