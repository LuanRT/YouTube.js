import { YTNode } from '../helpers.js';
import { RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ShowCustomThumbnail extends YTNode {
  static type = 'ShowCustomThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}