import { YTNode } from '../helpers.ts';
import { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

export default class MusicCardShelfHeaderBasic extends YTNode {
  static type = 'MusicCardShelfHeaderBasic';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}