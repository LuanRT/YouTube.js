import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';

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