import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';

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