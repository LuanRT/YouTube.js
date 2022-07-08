'use strict';

import NavigationEndpoint from './NavigationEndpoint';

class DownloadButton {
  type = 'DownloadButton';

  constructor(data) {
    this.style = data.style;
    this.size = data.size;
    this.endpoint = new NavigationEndpoint(data.command);
    this.target_id = data.targetId;
  }
}

export default DownloadButton;