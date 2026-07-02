import { Parser } from '../../index.js';
import Button from '../Button.js';
import Thumbnail from '../misc/Thumbnail.js';
import CommentView from './CommentView.js';
import CommentThread from './CommentThread.js';
import ContinuationItem from '../ContinuationItem.js';

import { YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';

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