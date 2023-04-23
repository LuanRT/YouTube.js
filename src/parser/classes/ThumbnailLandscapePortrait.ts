import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ThumbnailLandscapePortrait extends YTNode {
  static type = 'ThumbnailLandscapePortrait';

  landscape: Thumbnail[];
  portrait: Thumbnail[];

  constructor (data: RawNode) {
    super();
    this.landscape = Thumbnail.fromResponse(data.landscape);
    this.portrait = Thumbnail.fromResponse(data.portrait);
  }
}