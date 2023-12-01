import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Button from './Button.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

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