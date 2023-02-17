import { YTNode } from '../helpers.ts';
import Thumbnail from './misc/Thumbnail.ts';

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