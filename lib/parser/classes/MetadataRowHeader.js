import Text from "./Text.js";

class MetadataRowHeader {
    type = 'MetadataRowHeader';
    constructor(data) {
        this.content = new Text(data.content);
        this.has_divider_line = data.hasDividerLine;
    }
}
export default MetadataRowHeader;
