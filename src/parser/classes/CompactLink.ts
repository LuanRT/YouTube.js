import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

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