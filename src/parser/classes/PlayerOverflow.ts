import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class PlayerOverflow extends YTNode {
  static type = 'PlayerOverflow';

  endpoint: NavigationEndpoint;
  enable_listen_first: boolean;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.enable_listen_first = data.enableListenFirst;
  }
}