import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';

class MusicThumbnail extends YTNode {
  static type = 'MusicThumbnail';

  contents;

  constructor(data: any) {
    super();
    this.contents = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default MusicThumbnail;