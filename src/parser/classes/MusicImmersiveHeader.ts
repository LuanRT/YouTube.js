import { YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import MusicThumbnail from './MusicThumbnail.js';
import Text from './misc/Text.js';

export default class MusicImmersiveHeader extends YTNode {
  static type = 'MusicImmersiveHeader';

  title: Text;
  description: Text;
  thumbnail: MusicThumbnail | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
    /**
         Not useful for now.
         this.menu = Parser.parse(data.menu);
         this.play_button = Parser.parse(data.playButton);
         this.start_radio_button = Parser.parse(data.startRadioButton);
     */
  }
}