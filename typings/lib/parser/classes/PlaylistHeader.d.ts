export = PlaylistHeader;
declare class PlaylistHeader {
    constructor(data: any);
    type: string;
    id: any;
    title: Text;
    stats: any;
    brief_stats: any;
    author: PlaylistAuthor;
    description: Text;
    num_videos: Text;
    view_count: Text;
    can_share: any;
    can_delete: any;
    is_editable: any;
    privacy: any;
    save_button: any;
    shuffle_play_button: any;
    menu: any;
}
import Text = require("./Text");
import PlaylistAuthor = require("./PlaylistAuthor");
