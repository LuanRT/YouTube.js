import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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