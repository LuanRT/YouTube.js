import { YTNode } from '../helpers';
import Thumbnail from './misc/Thumbnail';

class ThumbnailLandscapePortrait extends YTNode {
  static type = 'ThumbnailLandscapePortrait';

  landscape: Thumbnail[];
  portrait: Thumbnail[];

  constructor (data: any) {
    super();
    this.landscape = Thumbnail.fromResponse(data.landscape);
    this.portrait = Thumbnail.fromResponse(data.portrait);
  }
}

export default ThumbnailLandscapePortrait;