import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Button from './Button.ts';
import DecoratedPlayerBar from './DecoratedPlayerBar.ts';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay.ts';
import WatchNextEndScreen from './WatchNextEndScreen.ts';
import Menu from './menus/Menu.ts';

export default class PlayerOverlay extends YTNode {
  static type = 'PlayerOverlay';

  end_screen: WatchNextEndScreen | null;
  autoplay: PlayerOverlayAutoplay | null;
  share_button: Button | null;
  add_to_menu: Menu | null;
  fullscreen_engagement: YTNode | null;
  actions: ObservedArray<YTNode>;
  browser_media_session: YTNode | null;
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