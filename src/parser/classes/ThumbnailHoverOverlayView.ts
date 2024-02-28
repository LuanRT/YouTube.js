import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

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