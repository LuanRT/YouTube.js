import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

class SearchFilter extends YTNode {
  static type = 'SearchFilter';

  label: Text;
  endpoint: NavigationEndpoint;
  tooltip: string;

  constructor(data: RawNode) {
    super();

    this.label = new Text(data.label);
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.tooltip = data.tooltip;
  }
}

export default SearchFilter;