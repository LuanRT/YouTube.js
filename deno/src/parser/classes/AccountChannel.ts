import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class AccountChannel extends YTNode {
  static type = 'AccountChannel';

  title: Text;
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default AccountChannel;