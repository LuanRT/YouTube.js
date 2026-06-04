import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class RatingSurveyOption extends YTNode {
  static type = 'RatingSurveyOption';

  public response_text: Text;
  public default_state_icon: {
    icon_type: string;
  };
  public on_state_icon: {
    icon_type: string;
  };
  public endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.response_text = new Text(data.responseText);
    this.default_state_icon = {
      icon_type: data.defaultStateIcon.iconType
    };
    this.on_state_icon = {
      icon_type: data.onStateIcon.iconType
    };
    this.endpoint = new NavigationEndpoint(data.followUpCommand || data.responseEndpoint);
  }
}

RatingSurveyOption.prototype.type = 'RatingSurveyOption';
