import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class ThumbnailHoverOverlayView extends YTNode {
  static type = 'ThumbnailHoverOverlayView';

  icon_name: string;
  text: Text;
  style: string;

  constructor(data: RawNode) {
    super();

    this.icon_name = data.icon.sources[0].clientResource.imageName;
    this.text = Text.fromAttributed(data.text);
    this.style = data.style;
  }
}