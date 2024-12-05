import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Button from './Button.ts';
import DecoratedPlayerBar from './DecoratedPlayerBar.ts';
import PlayerOverlayAutoplay from './PlayerOverlayAutoplay.ts';
import PlayerOverlayVideoDetails from './PlayerOverlayVideoDetails.ts';
import WatchNextEndScreen from './WatchNextEndScreen.ts';
import Menu from './menus/Menu.ts';

export default class PlayerOverlay extends YTNode {
  static type = 'PlayerOverlay';

  public end_screen: WatchNextEndScreen | null;
  public autoplay: PlayerOverlayAutoplay | null;
  public share_button: Button | null;
  public add_to_menu: Menu | null;
  public fullscreen_engagement: YTNode | null;
  public actions: ObservedArray<YTNode>;
  public browser_media_session: YTNode | null;
  public decorated_player_bar: DecoratedPlayerBar | null;
  public video_details: PlayerOverlayVideoDetails | null;

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
    this.video_details = Parser.parseItem(data.videoDetails, PlayerOverlayVideoDetails);
  }
}