import Parser from '../index';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';

import { YTNode } from '../helpers';

class PlayerErrorMessage extends YTNode {
  static type = 'PlayerErrorMessage';
  constructor(data) {
    super();
    this.subreason = new Text(data.subreason);
    this.reason = new Text(data.reason);
    this.proceed_button = Parser.parse(data.proceedButton);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.icon_type = data.icon.iconType;
  }
}
export default PlayerErrorMessage;
