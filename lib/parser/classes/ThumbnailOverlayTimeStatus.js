import Text from './misc/Text';

import { YTNode } from '../helpers';

class ThumbnailOverlayTimeStatus extends YTNode {
  static type = 'ThumbnailOverlayTimeStatus';
  constructor(data) {
    super();
    this.text = new Text(data.text).text;
  }
}
export default ThumbnailOverlayTimeStatus;
