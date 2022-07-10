'use strict';

import Text from './Text';
import NavigationEndpoint from './NavigationEndpoint';

class SingleActionEmergencySupport {
  type = 'SingleActionEmergencySupport';

  constructor(data) {
    this.action_text = new Text(data.actionText);
    this.nav_text = new Text(data.navigationText);
    this.details = new Text(data.detailsText);
    this.icon_type = data.icon.iconType;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default SingleActionEmergencySupport;