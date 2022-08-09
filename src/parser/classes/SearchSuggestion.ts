import Text from './misc/Text';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class SearchSuggestion extends YTNode {
  static type = 'SearchSuggestion';

  suggestion: Text;
  endpoint: NavigationEndpoint;
  icon_type: string;
  service_endpoint;

  constructor(data: any) {
    super();
    this.suggestion = new Text(data.suggestion);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.icon_type = data.icon.iconType;

    if (data.serviceEndpoint) {
      this.service_endpoint = new NavigationEndpoint(data.serviceEndpoint);
    }
  }
}

export default SearchSuggestion;