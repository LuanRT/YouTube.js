import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import Menu from './menus/Menu.ts';

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