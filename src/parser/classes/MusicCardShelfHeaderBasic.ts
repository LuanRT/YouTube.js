import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';

export default class MusicCardShelfHeaderBasic extends YTNode {
  static type = 'MusicCardShelfHeaderBasic';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}