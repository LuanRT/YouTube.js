import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import MusicThumbnail from './MusicThumbnail.ts';
import Text from './misc/Text.ts';

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