import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class PlaylistVideoThumbnail extends YTNode {
  static type = 'PlaylistVideoThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default PlaylistVideoThumbnail;