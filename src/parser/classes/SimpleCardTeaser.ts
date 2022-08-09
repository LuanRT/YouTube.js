import Text from './misc/Text';
import { YTNode } from '../helpers';

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