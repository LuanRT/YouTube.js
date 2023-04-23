import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class ThumbnailOverlayLoadingPreview extends YTNode {
  static type = 'ThumbnailOverlayLoadingPreview';

  text: Text;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
  }
}