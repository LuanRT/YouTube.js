import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class PlayerErrorMessage extends YTNode {
  static type = 'PlayerErrorMessage';

  subreason: Text;
  reason: Text;
  proceed_button: Button | null;
  thumbnails: Thumbnail[];
  icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.subreason = new Text(data.subreason);
    this.reason = new Text(data.reason);
    this.proceed_button = Parser.parseItem(data.proceedButton, Button);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon.iconType;
    }
  }
}