'use strict';

import Text from './Text';
import Thumbnail from './Thumbnail';

class CommentsEntryPointHeader {
  type = 'CommentsEntryPointHeader';

  constructor(data) {
    this.header = new Text(data.headerText);
    this.comment_count = new Text(data.commentCount);
    this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
    this.teaser_content = new Text(data.teaserContent);
    this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
  }
}

export default CommentsEntryPointHeader;