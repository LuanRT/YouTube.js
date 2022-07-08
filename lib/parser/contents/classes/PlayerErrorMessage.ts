'use strict';

import Parser from '..';
import Text from './Text';
import Thumbnail from './Thumbnail';

class PlayerErrorMessage {
  type = 'PlayerErrorMessage';

  constructor(data) {
    this.subreason = new Text(data.subreason);
    this.reason = new Text(data.reason);
    this.proceed_button = Parser.parse(data.proceedButton);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.icon_type = data.icon.iconType;
  }
}

export default PlayerErrorMessage;