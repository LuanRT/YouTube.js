import Text from '../misc/Text';
import Thumbnail from '../misc/Thumbnail';

import { YTNode } from '../../helpers';

class CommentsEntryPointHeader extends YTNode {
  static type = 'CommentsEntryPointHeader';
  constructor(data) {
    super();
    this.header = new Text(data.headerText);
    this.comment_count = new Text(data.commentCount);
    this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
    this.teaser_content = new Text(data.teaserContent);
    this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
  }
}
export default CommentsEntryPointHeader;
