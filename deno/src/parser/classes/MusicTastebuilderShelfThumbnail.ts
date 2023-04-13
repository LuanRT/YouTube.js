import { YTNode } from '../helpers.ts';
import { Thumbnail } from '../misc.ts';
import type { RawNode } from '../index.ts';

export default class MusicTastebuilderShelfThumbnail extends YTNode {
  static type = 'MusicTastebuilderShelfThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}