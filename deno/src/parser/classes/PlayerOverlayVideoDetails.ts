import { Text } from '../misc.ts';
import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';

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