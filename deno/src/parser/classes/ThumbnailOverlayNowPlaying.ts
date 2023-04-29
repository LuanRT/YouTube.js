import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class ThumbnailOverlayNowPlaying extends YTNode {
  static type = 'ThumbnailOverlayNowPlaying';

  text: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text).toString();
  }
}