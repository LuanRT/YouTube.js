import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class ThumbnailOverlayNowPlaying extends YTNode {
  static type = 'ThumbnailOverlayNowPlaying';

  text: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text).toString();
  }
}