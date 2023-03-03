import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import Parser from '../parser.js';

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