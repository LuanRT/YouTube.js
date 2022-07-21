import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class CompactLink extends YTNode {
  static type = 'CompactLink';

  constructor(data) {
    super();
    this.title = new Text(data.title).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.style = data.style;
  }
}

export default CompactLink;