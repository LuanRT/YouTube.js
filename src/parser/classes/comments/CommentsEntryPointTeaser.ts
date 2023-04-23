import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class CommentsEntryPointTeaser extends YTNode {
  static type = 'CommentsEntryPointTeaser';

  teaser_avatar?: Thumbnail[];
  teaser_content?: Text;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'teaserAvatar')) {
      this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar);
    }

    if (Reflect.has(data, 'teaserContent')) {
      this.teaser_content = new Text(data.teaserContent);
    }
  }
}