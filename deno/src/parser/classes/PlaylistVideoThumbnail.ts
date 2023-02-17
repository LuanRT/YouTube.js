import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

class PlaylistVideoThumbnail extends YTNode {
  static type = 'PlaylistVideoThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default PlaylistVideoThumbnail;