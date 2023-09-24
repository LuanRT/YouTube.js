import {YTNode} from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class Command extends YTNode {
  static type = 'Command';

  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.endpoint = new NavigationEndpoint(data);
  }
}