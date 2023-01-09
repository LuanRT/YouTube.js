import Parser from '../../index';
import Thumbnail from '../misc/Thumbnail';
import type Button from '../Button';
import { YTNode } from '../../helpers';

class CommentReplies extends YTNode {
  static type = 'CommentReplies';

  contents;
  view_replies: Button | null;
  hide_replies: Button | null;
  view_replies_creator_thumbnail: Thumbnail[];
  has_channel_owner_replied: boolean;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
    this.view_replies = Parser.parseItem<Button>(data.viewReplies);
    this.hide_replies = Parser.parseItem<Button>(data.hideReplies);
    this.view_replies_creator_thumbnail = Thumbnail.fromResponse(data.viewRepliesCreatorThumbnail);
    this.has_channel_owner_replied = !!data.viewRepliesCreatorThumbnail;
  }
}

export default CommentReplies;