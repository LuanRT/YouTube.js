import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class MusicThumbnail extends YTNode {
  static type = 'MusicThumbnail';

  contents;

  constructor(data: any) {
    super();
    this.contents = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default MusicThumbnail;