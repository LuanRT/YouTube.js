import Parser from '../index';
import Text from './misc/Text';
import { YTNode } from '../helpers';

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