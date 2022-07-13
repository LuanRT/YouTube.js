import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode } from "../helpers";
import MetadataRowContainer from "./MetadataRowContainer.js";

class VideoSecondaryInfo extends YTNode {
    static type = 'VideoSecondaryInfo';
    constructor(data) {
        super();
        this.owner = Parser.parse(data.owner);
        this.description = new Text(data.description);
        this.subscribe_button = Parser.parse(data.subscribeButton);
        this.metadata = Parser.parseItem(data.metadataRowContainer, MetadataRowContainer);
        this.show_more_text = data.showMoreText;
        this.show_less_text = data.showLessText;
        this.default_expanded = data.defaultExpanded;
        this.description_collapsed_lines = data.descriptionCollapsedLines;
    }
}
export default VideoSecondaryInfo;
