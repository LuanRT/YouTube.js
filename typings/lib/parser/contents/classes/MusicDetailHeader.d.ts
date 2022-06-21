export = MusicDetailHeader;
declare class MusicDetailHeader {
    constructor(data: any);
    type: string;
    title: Text;
    description: Text;
    subtitle: Text;
    second_subtitle: Text;
    year: any;
    song_count: any;
    total_duration: any;
    thumbnails: Thumbnail[];
    badges: any;
    author: {
        name: any;
        channel_id: any;
        endpoint: any;
    };
    menu: any;
}
import Text = require("./Text");
import Thumbnail = require("./Thumbnail");
