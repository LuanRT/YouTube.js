import Text from './misc/Text';
import { YTNode } from '../helpers';

class ThumbnailOverlayLoadingPreview extends YTNode {
  static type = 'ThumbnailOverlayLoadingPreview';

  text: Text;

  constructor(data: any) {
    super();
    this.text = new Text(data.text);
  }
}

export default ThumbnailOverlayLoadingPreview;