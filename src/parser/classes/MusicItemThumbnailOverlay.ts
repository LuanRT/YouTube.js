import { Parser, type RawNode } from '../index.js';
import MusicPlayButton from './MusicPlayButton.js';
import { YTNode } from '../helpers.js';

export default class MusicItemThumbnailOverlay extends YTNode {
  static type = 'MusicItemThumbnailOverlay';

  content: MusicPlayButton | null;
  content_position: string;
  display_style: string;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content, MusicPlayButton);
    this.content_position = data.contentPosition;
    this.display_style = data.displayStyle;
  }
}