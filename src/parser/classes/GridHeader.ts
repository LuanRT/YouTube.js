import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class GridHeader extends YTNode {
  static type = 'GridHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default GridHeader;