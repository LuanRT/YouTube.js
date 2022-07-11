export = PlaylistPanel;
declare class PlaylistPanel {
    constructor(data: any);
    type: string;
    title: any;
    title_text: Text;
    contents: any;
    playlist_id: any;
    is_infinite: any;
    continuation: any;
    is_editable: any;
    preview_description: any;
    num_items_to_show: any;
}
import Text = require("./Text");
