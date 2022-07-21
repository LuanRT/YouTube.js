import Text from './misc/Text';
import { YTNode } from '../helpers';

class SimpleCardTeaser extends YTNode {
  static type = 'SimpleCardTeaser';

  constructor(data) {
    super();
    this.message = new Text(data.message);
    this.prominent = data.prominent;
  }
}

export default SimpleCardTeaser;