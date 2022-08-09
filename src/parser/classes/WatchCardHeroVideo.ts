import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class WatchCardHeroVideo extends YTNode {
  static type = 'WatchCardHeroVideo';

  endpoint: NavigationEndpoint;
  call_to_action_button;
  hero_image;
  label: string;

  constructor(data: any) {
    super();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.call_to_action_button = Parser.parse(data.callToActionButton);
    this.hero_image = Parser.parse(data.heroImage);
    this.label = data.accessibility.accessibilityData.label;
  }
}

export default WatchCardHeroVideo;