import Text from './misc/Text.js';
import * as Parser from '../parser.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class GuideSection extends YTNode {
  static type = 'GuideSection';

  title?: Text;
  items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'formattedTitle')) {
      this.title = new Text(data.formattedTitle);
    }

    this.items = Parser.parseArray(data.items);
  }
}