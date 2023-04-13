import { YTNode } from '../helpers.js';
import { Thumbnail } from '../misc.js';
import type { RawNode } from '../index.js';

export default class MusicTastebuilderShelfThumbnail extends YTNode {
  static type = 'MusicTastebuilderShelfThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}