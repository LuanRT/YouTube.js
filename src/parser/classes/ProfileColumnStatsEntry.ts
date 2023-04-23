import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

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