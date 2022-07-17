import Parser from '../index';

import { YTNode } from '../helpers';

class RichItem extends YTNode {
  static type = 'RichItem';
  constructor(data) {
    super();
    return Parser.parse(data.content);
  }
}
export default RichItem;
