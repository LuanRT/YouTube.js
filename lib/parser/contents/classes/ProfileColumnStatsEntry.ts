'use strict';

import Text from './Text';

class ProfileColumnStatsEntry {
  type = 'ProfileColumnStatsEntry';

  constructor(data) {
    this.label = new Text(data.label);
    this.value = new Text(data.value);
  }
}

export default ProfileColumnStatsEntry;