import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';

class SearchFilter extends YTNode {
  static type = 'SearchFilter';

  label: Text;
  endpoint: NavigationEndpoint;
  tooltip: string;
  status?: string;

  constructor(data: RawNode) {
    super();

    this.label = new Text(data.label);
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.tooltip = data.tooltip;

    if (data.status) {
      this.status = data.status;
    }
  }

  get disabled(): boolean {
    return this.status === 'FILTER_STATUS_DISABLED';
  }

  get selected(): boolean {
    return this.status === 'FILTER_STATUS_SELECTED';
  }
}

export default SearchFilter;