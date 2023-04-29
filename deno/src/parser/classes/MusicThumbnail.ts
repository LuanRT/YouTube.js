import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MusicThumbnail extends YTNode {
  static type = 'MusicThumbnail';

  contents: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.contents = Thumbnail.fromResponse(data.thumbnail);
  }
}