import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';

class PlaylistCustomThumbnail extends YTNode {
  static type = 'PlaylistCustomThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default PlaylistCustomThumbnail;