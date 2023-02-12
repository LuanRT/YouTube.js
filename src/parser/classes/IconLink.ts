import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';

class IconLink extends YTNode {
  static type = 'IconLink';

  icon_type: string;
  tooltip?: string;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();

    this.icon_type = data.icon?.iconType;

    if (data.tooltip) {
      this.tooltip = new Text(data.tooltip).toString();
    }

    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default IconLink;