import { Text } from '../misc.js';
import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class PlayerOverlayVideoDetails extends YTNode {
  static type = 'PlayerOverlayVideoDetails';

  public title: Text;
  public subtitle: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
  }
}