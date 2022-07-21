import Text from './misc/Text';
import { YTNode } from '../helpers';

class ThumbnailOverlayInlineUnplayable extends YTNode {
  static type = 'ThumbnailOverlayInlineUnplayable';

  constructor(data) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
  }
}

export default ThumbnailOverlayInlineUnplayable;