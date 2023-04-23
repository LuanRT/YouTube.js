import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ThumbnailOverlaySidePanel extends YTNode {
  static type = 'ThumbnailOverlaySidePanel';

  text: Text;
  icon_type: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
    this.icon_type = data.icon.iconType;
  }
}