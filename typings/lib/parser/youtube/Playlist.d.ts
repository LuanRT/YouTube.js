export = Playlist;
declare class Playlist extends Feed {
    info: any;
    menu: any;
    endpoint: any;
    /**
     * @alias videos
     */
    get items(): (import("../contents/classes/Video") | import("../contents/classes/GridVideo") | import("../contents/classes/CompactVideo") | import("../contents/classes/PlaylistVideo") | import("../contents/classes/PlaylistPanelVideo") | import("../contents/classes/WatchCardCompactVideo"))[];
    #private;
}
import Feed = require("../../core/Feed");
