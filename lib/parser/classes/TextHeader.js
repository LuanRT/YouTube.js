import Text from './misc/Text';

import { YTNode } from '../helpers';

class TextHeader extends YTNode {
  static type = 'TextHeader';
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.style = data.style;
  }
}
export default TextHeader;
