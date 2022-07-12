import Parser from "../index.js";
import Text from "./misc/Text.js";

import { YTNode, ParserTypeSymbol } from "..";

class PlaylistPanel extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistPanel';
    constructor(data) {
        super();
        this.title = data.title;
        this.title_text = new Text(data.titleText);
        this.contents = Parser.parse(data.contents);
        this.playlist_id = data.playlistId;
        this.is_infinite = data.isInfinite;
        this.continuation = data.continuations[0]?.nextRadioContinuationData?.continuation;
        this.is_editable = data.isEditable;
        this.preview_description = data.previewDescription;
        this.num_items_to_show = data.numItemsToShow;
    }
}
export default PlaylistPanel;
