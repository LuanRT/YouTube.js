export = Playlist;
declare class Playlist extends Feed {
    primary_info: any;
    get title(): any;
    get description(): any;
    get total_items(): any;
    get views(): any;
    get last_updated(): any;
    /**
     * @alias videos
     */
    get items(): (import("../contents/classes/PlaylistPanelVideo") | import("../contents/classes/CompactVideo") | import("../contents/classes/Video") | import("../contents/classes/GridVideo") | import("../contents/classes/PlaylistVideo") | import("../contents/classes/WatchCardCompactVideo"))[];
    #private;
}
import Feed = require("../../core/Feed");
