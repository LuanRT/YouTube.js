import Parser from '../../index.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import Text from '../misc/Text.ts';
import type Button from '../Button.ts';
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
    this.submit_button = Parser.parseItem<Button>(data.submitButton);
    this.cancel_button = Parser.parseItem<Button>(data.cancelButton);
    this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
}

export default CommentSimplebox;