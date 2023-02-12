import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class SubFeedOption extends YTNode {
  static type = 'SubFeedOption';

  name: Text;
  is_selected: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.name = new Text(data.name);
    this.is_selected = data.isSelected;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default SubFeedOption;