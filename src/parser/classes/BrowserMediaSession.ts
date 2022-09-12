import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class BrowserMediaSession extends YTNode {
  static type = 'BrowserMediaSession';

  album;
  thumbnails;

  constructor (data: any) {
    super();
    this.album = new Text(data.album);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnailDetails);
  }
}

export default BrowserMediaSession;