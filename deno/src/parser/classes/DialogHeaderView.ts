import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import { Text } from '../misc.ts';

export default class DialogHeaderView extends YTNode {
  static type = 'DialogHeaderView';

  public headline: Text;

  constructor(data: RawNode) {
    super();
    this.headline = Text.fromAttributed(data.headline);
  }
}