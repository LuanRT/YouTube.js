import Text from './misc/Text.ts';
import Parser from '../parser.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class GuideSection extends YTNode {
  static type = 'GuideSection';

  title?: Text;
  items;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'formattedTitle')) {
      this.title = new Text(data.formattedTitle);
    }

    this.items = Parser.parseArray(data.items);
  }
}