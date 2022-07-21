import Text from './misc/Text';
import { YTNode } from '../helpers';

class ThumbnailOverlaySidePanel extends YTNode {
  static type = 'ThumbnailOverlaySidePanel';

  constructor(data) {
    super();
    this.text = new Text(data.text);
    this.type = data.icon.iconType;
  }
}

export default ThumbnailOverlaySidePanel;