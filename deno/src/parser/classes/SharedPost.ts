import { YTNode } from '../helpers.ts';
import Parser from '../parser.ts';
import BackstagePost from './BackstagePost.ts';
import Button from './Button.ts';
import Menu from './menus/Menu.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

class SharedPost extends YTNode {
  static type = 'SharedPost';

  thumbnail: Thumbnail[];
  content: Text;
  published: Text;
  menu: Menu | null;
  original_post: BackstagePost | null;
  id: string;
  endpoint: NavigationEndpoint;
  expand_button: Button | null;
  author: Author;

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.content = new Text(data.content);
    this.published = new Text(data.publishedTimeText);
    this.menu = Parser.parseItem(data.actionMenu, Menu);
    this.original_post = Parser.parseItem(data.originalPost, BackstagePost);
    this.id = data.postId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.expand_button = Parser.parseItem(data.expandButton, Button);
    this.author = new Author(data.displayName, undefined);
  }
}

export default SharedPost;