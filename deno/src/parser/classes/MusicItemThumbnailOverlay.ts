import Parser from '../index.ts';
import MusicPlayButton from './MusicPlayButton.ts';
import { YTNode } from '../helpers.ts';

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