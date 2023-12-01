import { Parser } from '../../index.js';
import Button from '../Button.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';

import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class CommentSimplebox extends YTNode {
  static type = 'CommentSimplebox';

  submit_button: Button | null;
  cancel_button: Button | null;
  author_thumbnail: Thumbnail[];
  placeholder: Text;
  avatar_size: string;

  constructor(data: RawNode) {
    super();
    this.submit_button = Parser.parseItem(data.submitButton, Button);
    this.cancel_button = Parser.parseItem(data.cancelButton, Button);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
}