import Text from '../misc/Text.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

class CommentsEntryPointHeader extends YTNode {
  static type = 'CommentsEntryPointHeader';

  header?: Text;
  comment_count?: Text;
  teaser_avatar?: Thumbnail[];
  teaser_content?: Text;
  simplebox_placeholder?: Text;

  constructor(data: RawNode) {
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