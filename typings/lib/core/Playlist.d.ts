export = Playlist;
declare class Playlist extends Feed {
    constructor(session: any, data: any, client: any);
    /**
     * @returns {import('../parser/contents/PlaylistSidebarPrimaryInfo') | undefined}
     */
    getPrimaryInfo(): import('../parser/contents/PlaylistSidebarPrimaryInfo') | undefined;
    get title(): string;
    get description(): string;
    get total_items(): any;
    get views(): any;
    get last_updated(): any;
    /**
     * @alias videos
     */
    get items(): import("./VideoItem")[];
    getContinuation(): Promise<Playlist>;
    #private;
}
import Feed = require("./Feed");
