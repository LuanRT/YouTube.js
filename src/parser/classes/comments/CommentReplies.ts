import { Parser } from '../../index.js';
import Button from '../Button.js';
import Thumbnail from '../misc/Thumbnail.js';

import { YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class CommentReplies extends YTNode {
  static type = 'CommentReplies';

  contents: ObservedArray<YTNode>;
  view_replies: Button | null;
  hide_replies: Button | null;
  view_replies_creator_thumbnail: Thumbnail[];
  has_channel_owner_replied: boolean;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
    this.view_replies = Parser.parseItem(data.viewReplies, Button);
    this.hide_replies = Parser.parseItem(data.hideReplies, Button);
    this.view_replies_creator_thumbnail = Thumbnail.fromResponse(data.viewRepliesCreatorThumbnail);
    this.has_channel_owner_replied = !!data.viewRepliesCreatorThumbnail;
  }
}