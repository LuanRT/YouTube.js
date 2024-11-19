import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import { Text } from '../misc.js';

export default class DialogHeaderView extends YTNode {
  static type = 'DialogHeaderView';

  public headline: Text;

  constructor(data: RawNode) {
    super();
    this.headline = Text.fromAttributed(data.headline);
  }
}