import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class CommentsEntryPoint extends YTNode {
  static type = 'CommentsEntryPoint';

  author_thumbnail: Thumbnail[];
  author_text: Text;
  content_text: Text;
  header_text: Text;
  comment_count: Text;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.author_text = new Text(data.authorText);
    this.content_text = new Text(data.contentText);
    this.header_text = new Text(data.headerText);
    this.comment_count = new Text(data.commentCount);
    this.endpoint = new NavigationEndpoint(data.onSelectCommand);
  }
}