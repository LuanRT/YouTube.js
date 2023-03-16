import Parser from '../../index.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import Text from '../misc/Text.ts';
import Button from '../Button.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class CommentSimplebox extends YTNode {
  static type = 'CommentSimplebox';

  submit_button: Button | null;
  cancel_button: Button | null;
  author_thumbnails: Thumbnail[];
  placeholder: Text;
  avatar_size;

  constructor(data: RawNode) {
    super();
    this.submit_button = Parser.parseItem(data.submitButton, Button);
    this.cancel_button = Parser.parseItem(data.cancelButton, Button);
    this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
}

export default CommentSimplebox;