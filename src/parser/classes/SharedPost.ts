import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import * as Parser from '../parser.js';
import BackstagePost from './BackstagePost.js';
import Button from './Button.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class SharedPost extends YTNode {
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

  constructor(data: RawNode) {
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