import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class MusicVisualHeader extends YTNode {
  static type = 'MusicVisualHeader';

  title: Text;
  thumbnail: Thumbnail[];
  menu: Menu | null;
  foreground_thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.thumbnail = data.thumbnail ? Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer?.thumbnail) : [];
    this.menu = Parser.parseItem(data.menu, Menu);
    this.foreground_thumbnail = data.foregroundThumbnail ? Thumbnail.fromResponse(data.foregroundThumbnail.musicThumbnailRenderer?.thumbnail) : [];
  }
}