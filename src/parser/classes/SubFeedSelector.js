import Parser from '../index';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class SubFeedSelector extends YTNode {
  static type = 'SubFeedSelector';

  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.options = Parser.parse(data.options);
  }
}

export default SubFeedSelector;