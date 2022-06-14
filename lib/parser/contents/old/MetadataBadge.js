const Parser = require('..');

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

  /**
   * Get label as string
   * @returns {string}
   */
  toString() {
    return this.non_abbreviated_label || this.label;
  }
}

module.exports = MetadataBadge;