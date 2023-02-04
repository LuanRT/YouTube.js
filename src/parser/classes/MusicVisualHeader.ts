import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import Menu from './menus/Menu.js';

class MusicVisualHeader extends YTNode {
  static type = 'MusicVisualHeader';

  title;
  thumbnails;
  menu;
  foreground_thumbnails;

  constructor(data: any) {
    super();

    this.title = new Text(data.title);
    this.thumbnails = data.thumbnail ? Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer?.thumbnail) : [];
    this.menu = Parser.parseItem(data.menu, Menu);
    this.foreground_thumbnails = data.foregroundThumbnail ? Thumbnail.fromResponse(data.foregroundThumbnail.musicThumbnailRenderer?.thumbnail) : [];
  }
}

export default MusicVisualHeader;