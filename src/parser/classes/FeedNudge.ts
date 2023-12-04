import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

import type { RawNode } from '../types/index.js';

export default class FeedNudge extends YTNode {
  static type = 'FeedNudge';

  title: Text;
  subtitle: Text;
  endpoint: NavigationEndpoint;
  apply_modernized_style: boolean;
  trim_style: string;
  background_style: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.endpoint = new NavigationEndpoint(data.impressionEndpoint);
    this.apply_modernized_style = data.applyModernizedStyle;
    this.trim_style = data.trimStyle;
    this.background_style = data.backgroundStyle;
  }
}