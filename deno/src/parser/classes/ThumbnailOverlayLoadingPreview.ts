import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class ThumbnailOverlayLoadingPreview extends YTNode {
  static type = 'ThumbnailOverlayLoadingPreview';

  text: Text;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
  }
}