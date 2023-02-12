import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class SimpleCardTeaser extends YTNode {
  static type = 'SimpleCardTeaser';

  message: Text;
  prominent: boolean; // TODO: or string?

  constructor(data: any) {
    super();
    this.message = new Text(data.message);
    this.prominent = data.prominent;
  }
}

export default SimpleCardTeaser;