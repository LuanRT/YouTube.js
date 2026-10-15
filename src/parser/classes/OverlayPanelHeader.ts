import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import Text from './misc/Text.js';

export default class OverlayPanelHeader extends YTNode {
  static type = 'OverlayPanelHeader';

  image: Thumbnail[];
  title: Text;
  subtitle: Text;
  style: string;

  constructor(data: RawNode) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.style = data.style;
  }
}