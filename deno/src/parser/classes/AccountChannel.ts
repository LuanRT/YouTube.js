import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class AccountChannel extends YTNode {
  static type = 'AccountChannel';

  title: Text;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}