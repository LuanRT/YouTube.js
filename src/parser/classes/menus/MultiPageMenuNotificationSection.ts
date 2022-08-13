import Parser from '../../index';
import { YTNode } from '../../helpers';

class MultiPageMenuNotificationSection extends YTNode {
  static type = 'MultiPageMenuNotificationSection';

  items;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items);
  }

  get contents() {
    return this.items;
  }
}

export default MultiPageMenuNotificationSection;