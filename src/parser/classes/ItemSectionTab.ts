import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

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