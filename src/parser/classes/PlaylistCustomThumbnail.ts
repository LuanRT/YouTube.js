import { YTNode } from '../helpers';
import Thumbnail from './misc/Thumbnail';

export default class PlaylistCustomThumbnail extends YTNode {
  static type = 'PlaylistCustomThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}