import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';

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