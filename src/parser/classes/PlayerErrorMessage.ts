import Parser from '../index';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import Button from './Button';

import { YTNode } from '../helpers';

class PlayerErrorMessage extends YTNode {
  static type = 'PlayerErrorMessage';

  subreason: Text;
  reason: Text;
  proceed_button: Button | null;
  thumbnails: Thumbnail[];
  icon_type: string | null;

  constructor(data: any) {
    super();
    this.subreason = new Text(data.subreason);
    this.reason = new Text(data.reason);
    this.proceed_button = Parser.parseItem<Button>(data.proceedButton, Button);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.icon_type = data.icon?.iconType || null;
  }
}

export default PlayerErrorMessage;