export = SimpleVideo;
/**
 * Wraps around:
 * - Video
 * - GridVideo
 * - CompactVideo
 * - PlaylistVideo
 * - PlaylistPanelVideo
 * - TODO: WatchCardCompactVideo
 *
 * Provides a unified interface for all of them.
 *
 * TODO: refactor - name this VideoItem
 */
declare class SimpleVideo {
    static get regex(): RegExp;
    constructor(video: any);
    getUnderlyingRenderer(): import("../parser/contents/Video") | import("../parser/contents/GridVideo") | import("../parser/contents/CompactVideo") | import("../parser/contents/PlaylistVideo") | import("../parser/contents/PlaylistPanelVideo");
    get id(): any;
    get title(): string;
    get description(): any;
    get channel(): import("../parser/contents/Author");
    get metadata(): {
        view_count: any;
        short_view_count_text: {
            simple_text: any;
            accessibility_label: string;
        };
        thumbnail: import("../parser/contents/Thumbnail");
        thumbnails: import("../parser/contents/Thumbnail")[];
        moving_thumbnail: any;
        moving_thumbnails: any;
        published: any;
        duration: {
            seconds: number;
            simple_text: string;
            accessibility_label: string;
        };
        badges: any;
        owner_badges: string[];
    };
    #private;
}
