'use strict';

class MetadataBadge {
  constructor(data) {
    this.icon_type = data.icon?.iconType;
    this.style = data.style;
    this.tooltip = data.tooltip;
  }
}

module.exports = MetadataBadge;