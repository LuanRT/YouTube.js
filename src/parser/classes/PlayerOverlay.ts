import Parser, { RawNode } from '../index.js';
import Button from './Button.js';
import DecoratedPlayerBar from './DecoratedPlayerBar.js';
import Menu from './menus/Menu.js';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay.js';
import WatchNextEndScreen from './WatchNextEndScreen.js';

import { YTNode } from '../helpers.js';

class PlayerOverlay extends YTNode {
  static type = 'PlayerOverlay';

  end_screen: WatchNextEndScreen | null;
  autoplay: PlayerOverlayAutoplay | null;
  share_button: Button | null;
  add_to_menu: Menu | null;
  fullscreen_engagement;
  actions;
  browser_media_session;
  decorated_player_bar: DecoratedPlayerBar | null;

  constructor(data: RawNode) {
    super();
    this.end_screen = Parser.parseItem(data.endScreen, WatchNextEndScreen);
    this.autoplay = Parser.parseItem(data.autoplay, PlayerOverlayAutoplay);
    this.share_button = Parser.parseItem(data.shareButton, Button);
    this.add_to_menu = Parser.parseItem(data.addToMenu, Menu);
    this.fullscreen_engagement = Parser.parseItem(data.fullscreenEngagement);
    this.actions = Parser.parseArray(data.actions);
    this.browser_media_session = Parser.parseItem(data.browserMediaSession);
    this.decorated_player_bar = Parser.parseItem(data.decoratedPlayerBarRenderer, DecoratedPlayerBar);
  }
}

export default PlayerOverlay;