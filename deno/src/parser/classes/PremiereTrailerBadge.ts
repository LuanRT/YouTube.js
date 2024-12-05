import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import { Text } from '../misc.ts';

export default class PremiereTrailerBadge extends YTNode {
  static type = 'PremiereTrailerBadge';

  public label: Text;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
  }
}