import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ThumbnailOverlaySidePanel extends YTNode {
  static type = 'ThumbnailOverlaySidePanel';

  text: Text;
  icon_type: string;

  constructor(data: any) {
    super();
    this.text = new Text(data.text);
    this.icon_type = data.icon.iconType;
  }
}

export default ThumbnailOverlaySidePanel;