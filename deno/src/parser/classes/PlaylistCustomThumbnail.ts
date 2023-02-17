import { YTNode } from '../helpers.ts';
import Thumbnail from './misc/Thumbnail.ts';

class PlaylistCustomThumbnail extends YTNode {
  static type = 'PlaylistCustomThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default PlaylistCustomThumbnail;