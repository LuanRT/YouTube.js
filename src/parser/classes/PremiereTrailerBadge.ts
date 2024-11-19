import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import { Text } from '../misc.js';

export default class PremiereTrailerBadge extends YTNode {
  static type = 'PremiereTrailerBadge';

  public label: Text;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
  }
}