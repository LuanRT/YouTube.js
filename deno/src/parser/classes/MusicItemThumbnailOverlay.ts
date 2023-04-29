import Parser, { type RawNode } from '../index.ts';
import MusicPlayButton from './MusicPlayButton.ts';
import { YTNode } from '../helpers.ts';

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