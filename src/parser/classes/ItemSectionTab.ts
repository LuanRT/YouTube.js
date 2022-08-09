import NavigationEndpoint from './NavigationEndpoint';

import { YTNode } from '../helpers';
import Text from './misc/Text';

class ItemSectionTab extends YTNode {
  static type = 'Tab';

  title: Text;
  selected: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.selected = data.selected || false;
    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}

export default ItemSectionTab;