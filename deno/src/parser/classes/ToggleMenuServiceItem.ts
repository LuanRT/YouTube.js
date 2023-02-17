import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class ToggleMenuServiceItem extends YTNode {
  static type = 'ToggleMenuServiceItem';

  text: Text;
  toggled_text: Text;
  icon_type: string;
  toggled_icon_type: string;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.text = new Text(data.defaultText);
    this.toggled_text = new Text(data.toggledText);
    this.icon_type = data.defaultIcon.iconType;
    this.toggled_icon_type = data.toggledIcon.iconType;
    this.endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
  }
}

export default ToggleMenuServiceItem;