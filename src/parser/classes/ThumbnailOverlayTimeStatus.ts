import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ThumbnailOverlayTimeStatus extends YTNode {
  static type = 'ThumbnailOverlayTimeStatus';

  text: string;
  style: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text).toString();
    this.style = data.style;
  }
}