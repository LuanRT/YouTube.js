import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ThumbnailOverlayTimeStatus extends YTNode {
  static type = 'ThumbnailOverlayTimeStatus';

  public text: string;
  public style: string;
  public icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text).toString();
    this.style = data.style;
    if ('icon' in data) {
      this.icon_type = data.icon.iconType;
    }
  }
}