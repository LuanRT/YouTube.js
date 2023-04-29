import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class PlaylistVideoThumbnail extends YTNode {
  static type = 'PlaylistVideoThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}