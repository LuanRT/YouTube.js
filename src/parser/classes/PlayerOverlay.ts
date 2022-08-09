import Parser from '../index';
import { YTNode } from '../helpers';

class PlayerOverlay extends YTNode {
  static type = 'PlayerOverlay';
  
  end_screen;
  autoplay;
  share_button;
  add_to_menu;
  fullscreen_engagement;
  
  constructor(data: any) {
    super();
    this.end_screen = Parser.parse(data.endScreen);
    this.autoplay = Parser.parse(data.autoplay);
    this.share_button = Parser.parse(data.shareButton);
    this.add_to_menu = Parser.parse(data.addToMenu);
    this.fullscreen_engagement = Parser.parse(data.fullscreenEngagement);
  }
}

export default PlayerOverlay;