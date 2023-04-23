import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class PlaylistVideoThumbnail extends YTNode {
  static type = 'PlaylistVideoThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}