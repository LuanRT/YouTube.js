import Parser from '../../index';

import { YTNode } from '../../helpers';

class MultiPageMenuNotificationSection extends YTNode {
  static type = 'MultiPageMenuNotificationSection';
  constructor(data) {
    super();
    this.items = Parser.parse(data.items);
  }
  get contents() {
    return this.items;
  }
}
export default MultiPageMenuNotificationSection;
