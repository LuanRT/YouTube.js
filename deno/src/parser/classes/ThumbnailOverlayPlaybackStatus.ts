import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class ThumbnailOverlayPlaybackStatus extends YTNode {
  static type = 'ThumbnailOverlayPlaybackStatus';

  texts: Text[];

  constructor(data: RawNode) {
    super();
    this.texts = data.texts.map((text: RawNode) => new Text(text));
  }
}