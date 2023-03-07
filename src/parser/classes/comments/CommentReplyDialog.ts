import Parser from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import Text from '../misc/Text.js';
import type Button from '../Button.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

class CommentReplyDialog extends YTNode {
  static type = 'CommentReplyDialog';

  reply_button: Button | null;
  cancel_button: Button | null;
  author_thumbnail: Thumbnail[];
  placeholder: Text;
  error_message: Text;

  constructor(data: RawNode) {
    super();
    this.reply_button = Parser.parseItem<Button>(data.replyButton);
    this.cancel_button = Parser.parseItem<Button>(data.cancelButton);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.error_message = new Text(data.errorMessage);
  }
}

export default CommentReplyDialog;