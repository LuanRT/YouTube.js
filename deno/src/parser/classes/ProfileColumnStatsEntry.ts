import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ProfileColumnStatsEntry extends YTNode {
  static type = 'ProfileColumnStatsEntry';

  label: Text;
  value: Text;

  constructor(data: RawNode) {
    super();
    this.label = new Text(data.label);
    this.value = new Text(data.value);
  }
}