import Text from '../misc/Text.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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