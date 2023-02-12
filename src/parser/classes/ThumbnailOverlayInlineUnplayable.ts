import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ThumbnailOverlayInlineUnplayable extends YTNode {
  static type = 'ThumbnailOverlayInlineUnplayable';

  text: string;
  icon_type: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
  }
}

export default ThumbnailOverlayInlineUnplayable;