import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class MusicThumbnail extends YTNode {
  static type = 'MusicThumbnail';

  contents: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.contents = Thumbnail.fromResponse(data.thumbnail);
  }
}