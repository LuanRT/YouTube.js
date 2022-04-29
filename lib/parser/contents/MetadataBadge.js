const ResultsParser = require(".");

class MetadataBadge {
    type = 'MetadataBadge';
    style;
    label;
    nonAbbreviatedLabel;

    constructor(item) {
        this.style = item.style;
        this.label = item.label;
        this.nonAbbreviatedLabel = item.accessibilityData?.label;
    }
}

module.exports = MetadataBadge;