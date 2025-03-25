import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';

import Button from './Button.ts';
import MusicThumbnail from './MusicThumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SubscribeButton from './SubscribeButton.ts';
import ToggleButton from './ToggleButton.ts';

import Menu from './menus/Menu.ts';
import Text from './misc/Text.ts';

export default class MusicImmersiveHeader extends YTNode {
  static type = 'MusicImmersiveHeader';

  public title: Text;
  public menu: Menu | null;
  public more_button: ToggleButton | null;
  public play_button: Button | null;
  public share_endpoint?: NavigationEndpoint;
  public start_radio_button: Button | null;
  public subscription_button: SubscribeButton | null;
  public description: Text;
  public thumbnail: MusicThumbnail | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.menu = Parser.parseItem(data.menu, Menu);
    this.more_button = Parser.parseItem(data.moreButton, ToggleButton);
    this.play_button = Parser.parseItem(data.playButton, Button);

    if ('shareEndpoint' in data)
      this.share_endpoint = new NavigationEndpoint(data.shareEndpoint);
    
    this.start_radio_button = Parser.parseItem(data.startRadioButton, Button);
    this.subscription_button = Parser.parseItem(data.subscriptionButton, SubscribeButton);
    this.description = new Text(data.description);
    this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
  }
}