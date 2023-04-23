import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class ThumbnailOverlayPlaybackStatus extends YTNode {
  static type = 'ThumbnailOverlayPlaybackStatus';

  texts: Text[];

  constructor(data: RawNode) {
    super();
    this.texts = data.texts.map((text: RawNode) => new Text(text));
  }
}