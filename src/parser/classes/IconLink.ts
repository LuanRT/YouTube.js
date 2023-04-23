import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class IconLink extends YTNode {
  static type = 'IconLink';

  icon_type: string;
  tooltip?: string;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();

    this.icon_type = data.icon?.iconType;

    if (Reflect.has(data, 'tooltip')) {
      this.tooltip = new Text(data.tooltip).toString();
    }

    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}