
import { YTNode, ParserTypeSymbol } from "..";

class PlaylistMetadata extends YTNode {
    static [ParserTypeSymbol] = 'PlaylistMetadata';
    constructor(data) {
        super();
        this.title = data.title;
        this.description = data.description || null;
        // XXX: Appindexing should be in microformat
    }
}
export default PlaylistMetadata;
