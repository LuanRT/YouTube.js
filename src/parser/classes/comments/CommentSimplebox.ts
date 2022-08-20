import Parser from '../../index';
import Thumbnail from '../misc/Thumbnail';
import Text from '../misc/Text';
import { YTNode } from '../../helpers';

class CommentSimplebox extends YTNode {
  static type = 'CommentSimplebox';

  submit_button;
  cancel_button;
  author_thumbnails: Thumbnail[];
  placeholder: Text;
  avatar_size;

  constructor(data: any) {
    super();
    this.submit_button = Parser.parse(data.submitButton);
    this.cancel_button = Parser.parse(data.cancelButton);
    this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
}

export default CommentSimplebox;