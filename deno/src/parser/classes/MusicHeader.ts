import Parser, { type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';

export default class MusicHeader extends YTNode {
  static type = 'MusicHeader';

  header?: YTNode;
  title?: Text;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'header')) {
      this.header = Parser.parseItem(data.header);
    }

    if (Reflect.has(data, 'title')) {
      this.title = new Text(data.title);
    }
  }
}