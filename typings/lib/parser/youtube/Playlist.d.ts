export = Playlist;
declare class Playlist extends Feed {
    info: any;
    menu: any;
    endpoint: any;
    /**
     * @alias videos
     */
    get items(): (import("../classes/CompactVideo") | import("../classes/GridVideo") | import("../classes/PlaylistPanelVideo") | import("../classes/PlaylistVideo") | import("../classes/Video") | import("../classes/WatchCardCompactVideo"))[];
    #private;
}
import Feed = require("../../core/Feed");
