import { YTNode } from '../helpers.ts';
import type { RawNode } from '../types/RawResponse.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class ContinuationItemView extends YTNode {
  static type = 'ContinuationItemView';

  trigger: string;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();

    this.trigger = data.trigger;
    this.endpoint = new NavigationEndpoint(data.continuationCommand);
  }
}