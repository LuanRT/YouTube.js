import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class ThumbnailOverlayInlineUnplayable extends YTNode {
  static type = 'ThumbnailOverlayInlineUnplayable';

  text: string;
  icon_type: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
  }
}