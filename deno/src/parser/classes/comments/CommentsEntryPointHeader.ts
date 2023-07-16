import Text from '../misc/Text.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import CommentsSimplebox from './CommentsSimplebox.ts';
import CommentsEntryPointTeaser from './CommentsEntryPointTeaser.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import { Parser } from '../../index.ts';

export default class CommentsEntryPointHeader extends YTNode {
  static type = 'CommentsEntryPointHeader';

  header?: Text;
  comment_count?: Text;
  teaser_avatar?: Thumbnail[];
  teaser_content?: Text;
  content_renderer?: CommentsEntryPointTeaser | CommentsSimplebox | null;
  simplebox_placeholder?: Text;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'headerText')) {
      this.header = new Text(data.headerText);
    }

    if (Reflect.has(data, 'commentCount')) {
      this.comment_count = new Text(data.commentCount);
    }

    if (Reflect.has(data, 'teaserAvatar') || Reflect.has(data, 'simpleboxAvatar')) {
      this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
    }

    if (Reflect.has(data, 'teaserContent')) {
      this.teaser_content = new Text(data.teaserContent);
    }

    if (Reflect.has(data, 'contentRenderer')) {
      this.content_renderer = Parser.parseItem(data.contentRenderer, [ CommentsEntryPointTeaser, CommentsSimplebox ]);
    }

    if (Reflect.has(data, 'simpleboxPlaceholder')) {
      this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
    }
  }
}