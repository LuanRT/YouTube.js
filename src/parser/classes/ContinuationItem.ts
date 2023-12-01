import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class ContinuationItem extends YTNode {
  static type = 'ContinuationItem';

  trigger: string;
  button?: Button | null;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.trigger = data.trigger;

    if (Reflect.has(data, 'button')) {
      this.button = Parser.parseItem(data.button, Button);
    }

    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }
}