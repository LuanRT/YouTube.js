import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import BackstagePost from './BackstagePost.js';
import Button from './Button.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Post from './Post.js';

export default class SharedPost extends YTNode {
  static type = 'SharedPost';

  public thumbnail: Thumbnail[];
  public content: Text;
  public published: Text;
  public menu: Menu | null;
  public original_post: BackstagePost | Post | null;
  public id: string;
  public endpoint: NavigationEndpoint;
  public expand_button: Button | null;
  public author: Author;

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.content = new Text(data.content);
    this.published = new Text(data.publishedTimeText);
    this.menu = Parser.parseItem(data.actionMenu, Menu);
    this.original_post = Parser.parseItem(data.originalPost, [ BackstagePost, Post ]);
    this.id = data.postId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.expand_button = Parser.parseItem(data.expandButton, Button);
    this.author = new Author(data.displayName, undefined);
  }
}