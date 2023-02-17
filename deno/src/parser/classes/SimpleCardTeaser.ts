import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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