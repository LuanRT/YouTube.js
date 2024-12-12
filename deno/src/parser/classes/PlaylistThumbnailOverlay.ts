import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import Text from './misc/Text.ts';

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