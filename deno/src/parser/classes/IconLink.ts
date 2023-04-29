import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

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