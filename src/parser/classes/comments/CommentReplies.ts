import Parser from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import type Button from '../Button.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class CommentReplies extends YTNode {
  static type = 'CommentReplies';

  contents;
  view_replies: Button | null;
  hide_replies: Button | null;
  view_replies_creator_thumbnail: Thumbnail[];
  has_channel_owner_replied: boolean;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
    this.view_replies = Parser.parseItem<Button>(data.viewReplies);
    this.hide_replies = Parser.parseItem<Button>(data.hideReplies);
    this.view_replies_creator_thumbnail = Thumbnail.fromResponse(data.viewRepliesCreatorThumbnail);
    this.has_channel_owner_replied = !!data.viewRepliesCreatorThumbnail;
  }
}

export default CommentReplies;