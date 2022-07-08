'use strict';

import Text from './Text';

class MusicResponsiveListItemFixedColumn {
  type = 'musicResponsiveListItemFlexColumnRenderer';

  constructor(data) {
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}

export default MusicResponsiveListItemFixedColumn;