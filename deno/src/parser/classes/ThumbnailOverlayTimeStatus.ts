import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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