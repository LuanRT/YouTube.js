import Parser from '../../index.ts';
import Button from '../Button.ts';
import Text from '../misc/Text.ts';
import Thumbnail from '../misc/Thumbnail.ts';

import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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