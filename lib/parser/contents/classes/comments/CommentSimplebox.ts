'use strict';

import Parser from '../..';
import Thumbnail from '../Thumbnail';
import Text from '../Text';

class CommentSimplebox {
  type = 'CommentSimplebox';

  constructor(data) {
    this.submit_button = Parser.parse(data.submitButton);
    this.cancel_button = Parser.parse(data.cancelButton);
    this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
}

export default CommentSimplebox;