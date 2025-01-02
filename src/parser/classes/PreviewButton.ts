import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import Text from './misc/Text.js';

export default class PreviewButton extends YTNode {
  static type = 'PreviewButton';

  title: Text;
  subtitle: Text;
  thumbnail: Thumbnail[];
  byline: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.byline = new Text(data.byline);
  }
}