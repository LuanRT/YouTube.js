import Parser from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import Text from '../misc/Text.js';
import type Button from '../Button.js';
import { YTNode } from '../../helpers.js';

class CommentSimplebox extends YTNode {
  static type = 'CommentSimplebox';

  submit_button: Button | null;
  cancel_button: Button | null;
  author_thumbnails: Thumbnail[];
  placeholder: Text;
  avatar_size;

  constructor(data: any) {
    super();
    this.submit_button = Parser.parseItem<Button>(data.submitButton);
    this.cancel_button = Parser.parseItem<Button>(data.cancelButton);
    this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
}

export default CommentSimplebox;