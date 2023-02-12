import Parser from '../index.js';
import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class SubFeedSelector extends YTNode {
  static type = 'SubFeedSelector';

  title: Text;
  options;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.options = Parser.parse(data.options);
  }
}

export default SubFeedSelector;