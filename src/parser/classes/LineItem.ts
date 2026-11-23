import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import MetadataBadge from './MetadataBadge.js';
import Text from './misc/Text.js';

export default class LineItem extends YTNode {
  static type = 'LineItem';

  text: Text;
  badge: MetadataBadge | null;

  constructor(data: RawNode) {
    super();
    this.text = new Text(data.text);
    this.badge = Parser.parseItem(data.badge, MetadataBadge);
  }
}
