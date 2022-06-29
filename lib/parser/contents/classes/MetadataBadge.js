'use strict';

class MetadataBadge {
  constructor(data) {
    this.icon_type = data.icon?.iconType || null;
    this.style = data.style || null;
    this.tooltip = data.tooltip || null;
  }
}

module.exports = MetadataBadge;