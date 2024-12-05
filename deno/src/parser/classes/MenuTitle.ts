import { YTNode } from '../helpers.ts';
import { Text } from '../misc.ts';
import type { RawNode } from '../index.ts';

export default class MenuTitle extends YTNode {
  static type = 'MenuTitle';

  public title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}