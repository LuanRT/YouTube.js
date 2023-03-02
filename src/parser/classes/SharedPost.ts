import { YTNode } from '../helpers.js';
import Author from './misc/Author.js';
import { YTNodes } from '../index.js';
import Parser from '../parser.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

class SharedPost extends YTNode {
  static type = 'SharedPost';

  thumbnail: Thumbnail[];
  content: Text;
  published: Text;
  menu: YTNodes.Menu | null;
  original_post: YTNodes.BackstagePost | null;
  id: string;
  endpoint: NavigationEndpoint;
  expand_button: YTNodes.Button | null;
  author: Author;

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.content = new Text(data.content);
    this.published = new Text(data.publishedTimeText);
    this.menu = Parser.parseItem(data.actionMenu, [ YTNodes.Menu ]);
    this.original_post = Parser.parseItem(data.originalPost, [ YTNodes.BackstagePost ]);
    this.id = data.postId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.expand_button = Parser.parseItem(data.expandButton, [ YTNodes.Button ]);
    this.author = new Author(data.displayName, undefined);
  }
}

export default SharedPost;