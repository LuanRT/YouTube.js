import { Parser } from '../../index.ts';
import Button from '../Button.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import CommentView from './CommentView.ts';
import CommentThread from './CommentThread.ts';
import ContinuationItem from '../ContinuationItem.ts';

import { YTNode, type ObservedArray } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class CommentReplies extends YTNode {
  static type = 'CommentReplies';

  public contents: ObservedArray<CommentView | ContinuationItem>;
  public sub_threads: ObservedArray<CommentThread | ContinuationItem>;
  public view_replies: Button | null;
  public hide_replies: Button | null;
  public view_replies_creator_thumbnail: Thumbnail[];
  public has_channel_owner_replied: boolean;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, [ CommentView, ContinuationItem ]);
    this.sub_threads = Parser.parseArray(data.subThreads, [ CommentThread, ContinuationItem ]);
    this.view_replies = Parser.parseItem(data.viewReplies, Button);
    this.hide_replies = Parser.parseItem(data.hideReplies, Button);
    this.view_replies_creator_thumbnail = Thumbnail.fromResponse(data.viewRepliesCreatorThumbnail);
    this.has_channel_owner_replied = !!data.viewRepliesCreatorThumbnail;
  }
}