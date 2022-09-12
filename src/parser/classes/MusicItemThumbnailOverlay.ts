import Parser from '../index';
import MusicPlayButton from './MusicPlayButton';
import { YTNode } from '../helpers';

class MusicItemThumbnailOverlay extends YTNode {
  static type = 'MusicItemThumbnailOverlay';

  content;
  content_position;
  display_style: string;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem<MusicPlayButton>(data.content, MusicPlayButton);
    this.content_position = data.contentPosition;
    this.display_style = data.displayStyle;
  }
}

export default MusicItemThumbnailOverlay;