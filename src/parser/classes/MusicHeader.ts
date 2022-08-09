import Parser from '../index';
import { YTNode } from '../helpers';

class MusicHeader extends YTNode {
  static type = 'MusicHeader';

  header;

  constructor(data: any) {
    super();
    this.header = Parser.parse(data.header);
  }
}

export default MusicHeader;