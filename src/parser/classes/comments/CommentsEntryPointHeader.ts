import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';

class CommentsEntryPointHeader extends YTNode {
  static type = 'CommentsEntryPointHeader';

  header?: Text;
  comment_count?: Text;
  teaser_avatar?: Thumbnail[];
  teaser_content?: Text;
  simplebox_placeholder?: Text;

  constructor(data: any) {
    super();

    if (data.header) {
      this.header = new Text(data.headerText);
    }

    if (data.commentCount) {
      this.comment_count = new Text(data.commentCount);
    }

    if (data.teaserAvatar || data.simpleboxAvatar) {
      this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
    }

    if (data.teaserContent) {
      this.teaser_content = new Text(data.teaserContent);
    }

    if (data.simpleboxPlaceholder) {
      this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
    }
  }
}

export default CommentsEntryPointHeader;