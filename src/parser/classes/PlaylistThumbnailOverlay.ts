import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class PlaylistThumbnailOverlay extends YTNode {
  static type = 'PlaylistThumbnailOverlay';

  public icon_type?: string;
  public text: Text;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'icon'))
      this.icon_type = data.icon.iconType;
    this.text = new Text(data.text);
  }
}