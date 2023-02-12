import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';

class MusicHeader extends YTNode {
  static type = 'MusicHeader';

  header?;
  title?: Text;

  constructor(data: any) {
    super();

    if (data.header) {
      this.header = Parser.parse(data.header);
    }

    if (data.title) {
      this.title = new Text(data.title);
    }
  }
}

export default MusicHeader;