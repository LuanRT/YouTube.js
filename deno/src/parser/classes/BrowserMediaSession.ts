import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class BrowserMediaSession extends YTNode {
  static type = 'BrowserMediaSession';

  album: Text;
  thumbnails: Thumbnail[];

  constructor (data: RawNode) {
    super();
    this.album = new Text(data.album);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnailDetails);
  }
}