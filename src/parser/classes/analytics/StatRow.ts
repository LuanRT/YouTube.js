import Text from '../misc/Text';

import { YTNode } from '../../helpers';

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