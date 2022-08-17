import Parser from '../index';
import { YTNode } from '../helpers';
import Text from './misc/Text';

class MusicHeader extends YTNode {
  static type = 'MusicHeader';

  constructor(data) {
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