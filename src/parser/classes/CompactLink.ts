import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class CompactLink extends YTNode {
  static type = 'CompactLink';

  title: string;
  endpoint: NavigationEndpoint;
  style: string;

  constructor(data: any) {
    super();
    this.title = new Text(data.title).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.style = data.style;
  }
}

export default CompactLink;