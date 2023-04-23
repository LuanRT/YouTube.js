import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class SearchSuggestion extends YTNode {
  static type = 'SearchSuggestion';

  suggestion: Text;
  endpoint: NavigationEndpoint;
  icon_type?: string;
  service_endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.suggestion = new Text(data.suggestion);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon.iconType;
    }

    if (Reflect.has(data, 'serviceEndpoint')) {
      this.service_endpoint = new NavigationEndpoint(data.serviceEndpoint);
    }
  }
}