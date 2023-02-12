import Text from '../misc/Text.js';

import { YTNode } from '../../helpers.js';

class StatRow extends YTNode {
  static type = 'StatRow';

  title: Text;
  contents: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.contents = new Text(data.contents);
  }
}

export default StatRow;