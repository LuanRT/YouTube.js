import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

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