import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class Command extends YTNode {
  static type = 'Command';

  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data);
  }
}