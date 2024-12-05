import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';
import BackstagePost from './BackstagePost.ts';
import Button from './Button.ts';
import Menu from './menus/Menu.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Post from './Post.ts';

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