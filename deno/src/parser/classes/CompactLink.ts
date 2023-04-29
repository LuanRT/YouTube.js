import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class CompactLink extends YTNode {
  static type = 'CompactLink';

  title: string;
  endpoint: NavigationEndpoint;
  style: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.style = data.style;
  }
}