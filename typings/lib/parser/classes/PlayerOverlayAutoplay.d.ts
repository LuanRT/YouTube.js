export = PlayerOverlayAutoplay;
declare class PlayerOverlayAutoplay {
    constructor(data: any);
    type: string;
    title: Text;
    video_id: any;
    video_title: Text;
    short_view_count: Text;
    prefer_immediate_redirect: any;
    count_down_secs_for_fullscreen: any;
    published: Text;
    background: Thumbnail[];
    thumbnail_overlays: any;
    author: Author;
    cancel_button: any;
    next_button: any;
    close_button: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
import Author = require("./Author");
