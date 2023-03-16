import { YTNode } from '../helpers.ts';
import { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

class ThumbnailOverlayBottomPanel extends YTNode {
  static type = 'ThumbnailOverlayBottomPanel';

  text?: Text;
  icon_type?: string;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'text')) {
      this.text = new Text(data.text);
    }

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
      this.icon_type = data.icon.iconType;
    }
  }
}

export default ThumbnailOverlayBottomPanel;