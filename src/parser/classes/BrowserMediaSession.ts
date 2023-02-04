import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';

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