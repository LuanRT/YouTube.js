import Parser from '../index.ts';
import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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