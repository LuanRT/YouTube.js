import Parser from '../index';
import Menu from './menus/Menu';
import Button from './Button';
import WatchNextEndScreen from './WatchNextEndScreen';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay';

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
    this.end_screen = Parser.parseItem<WatchNextEndScreen>(data.endScreen, WatchNextEndScreen);
    this.autoplay = Parser.parseItem<PlayerOverlayAutoplay>(data.autoplay, PlayerOverlayAutoplay);
    this.share_button = Parser.parseItem<Button>(data.shareButton, Button);
    this.add_to_menu = Parser.parseItem<Menu>(data.addToMenu, Menu);
    this.fullscreen_engagement = Parser.parse(data.fullscreenEngagement);
  }
}

export default PlayerOverlay;