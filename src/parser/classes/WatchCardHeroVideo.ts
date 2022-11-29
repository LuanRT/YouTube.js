import Parser from '../index';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

export default class WatchCardHeroVideo extends YTNode {
  static type = 'WatchCardHeroVideo';

  endpoint: NavigationEndpoint;
  call_to_action_button;
  hero_image;
  label: string;

  constructor(data: any) {
    super();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.call_to_action_button = Parser.parseItem(data.callToActionButton);
    this.hero_image = Parser.parseItem(data.heroImage);
    this.label = data.lengthText?.accessibility.accessibilityData.label || '';
  }
}