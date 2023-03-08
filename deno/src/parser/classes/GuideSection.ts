import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import Parser from '../parser.ts';

class GuideSection extends YTNode {
  static type = 'GuideSection';

  title?: Text;
  items;

  constructor(data: any) {
    super();
    if (data.formattedTitle) {
      this.title = new Text(data.formattedTitle);
    }
    this.items = Parser.parseArray(data.items);
  }
}

export default GuideSection;