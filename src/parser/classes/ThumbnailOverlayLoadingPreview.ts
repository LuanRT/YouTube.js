import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ThumbnailOverlayLoadingPreview extends YTNode {
  static type = 'ThumbnailOverlayLoadingPreview';

  text: Text;

  constructor(data: any) {
    super();
    this.text = new Text(data.text);
  }
}

export default ThumbnailOverlayLoadingPreview;