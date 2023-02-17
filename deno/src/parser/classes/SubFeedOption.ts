import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

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