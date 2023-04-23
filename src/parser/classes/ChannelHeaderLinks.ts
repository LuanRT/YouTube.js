import { YTNode, observe, type ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

// XXX (LuanRT): This is not a real YTNode, but we treat it as one to keep things clean.
export class HeaderLink extends YTNode {
  static type = 'HeaderLink';

  endpoint: NavigationEndpoint;
  icon: Thumbnail[];
  title: Text;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.icon = Thumbnail.fromResponse(data.icon);
    this.title = new Text(data.title);
  }
}

export default class ChannelHeaderLinks extends YTNode {
  static type = 'ChannelHeaderLinks';

  primary: ObservedArray<HeaderLink>;
  secondary: ObservedArray<HeaderLink>;

  constructor(data: RawNode) {
    super();
    this.primary = observe(data.primaryLinks?.map((link: RawNode) => new HeaderLink(link)) || []);
    this.secondary = observe(data.secondaryLinks?.map((link: RawNode) => new HeaderLink(link)) || []);
  }
}