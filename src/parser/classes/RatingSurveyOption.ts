import type { RawNode } from '../types/RawResponse.js';
import { YTNode } from '../helpers.js';

import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class RatingSurveyOption extends YTNode {
  static type = 'RatingSurveyOption';

  public response_text: Text;
  public default_state_icon_type?: string;
  public on_state_icon_type?: string;
  public follow_up_endpoint?: NavigationEndpoint;
  public response_endpoint?: NavigationEndpoint;

  constructor(data: RawNode) {
    super();

    this.response_text = new Text(data.responseText);
    this.default_state_icon_type = data.defaultStateIcon?.iconType;
    this.on_state_icon_type = data.onStateIcon?.iconType;

    if ('followUpCommand' in data)
      this.follow_up_endpoint = new NavigationEndpoint(data.followUpCommand);

    if ('responseEndpoint' in data)
      this.response_endpoint = new NavigationEndpoint(data.responseEndpoint);
  }
}
