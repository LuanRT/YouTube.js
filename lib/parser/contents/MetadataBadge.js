const ResultsParser = require('.');

class MetadataBadge {
  type = 'MetadataBadge';
  style;
  label;
  non_abbreviated_label;

  constructor(item) {
    this.style = item.style;
    this.label = item.label;
    this.non_abbreviated_label = item.accessibilityData?.label;
  }
}

module.exports = MetadataBadge;