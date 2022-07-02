'use strict';

class MusicInlineBadge {
  type = 'MusicInlineBadge';

  constructor(data) {
    this.icon_type = data.icon.iconType;
    this.label = data.accessibilityData.accessibilityData.label;
  }
}

module.exports = MusicInlineBadge;