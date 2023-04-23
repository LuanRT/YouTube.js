import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';

export default class SubFeedOption extends YTNode {
  static type = 'SubFeedOption';

  name: Text;
  is_selected: boolean;
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.name = new Text(data.name);
    this.is_selected = data.isSelected;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}