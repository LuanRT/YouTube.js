import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

export default class ItemSectionTab extends YTNode {
  static type = 'Tab';

  title: Text;
  selected: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.selected = !!data.selected;
    this.endpoint = new NavigationEndpoint(data.endpoint);
  }
}