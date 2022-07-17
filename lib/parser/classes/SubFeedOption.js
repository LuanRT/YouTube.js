import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';

class SubFeedOption extends YTNode {
  static type = 'SubFeedOption';
  constructor(data) {
    super();
    this.name = new Text(data.name);
    this.is_selected = data.isSelected;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}
export default SubFeedOption;
