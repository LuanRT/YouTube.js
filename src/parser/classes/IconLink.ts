import Text from './misc/Text';
import { YTNode } from '../helpers';
import NavigationEndpoint from './NavigationEndpoint';

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