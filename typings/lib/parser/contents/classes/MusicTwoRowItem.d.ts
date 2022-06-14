export = MusicTwoRowItem;
declare class MusicTwoRowItem {
    constructor(data: any);
    type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    id: any;
    subtitle: Text;
    badges: any;
    subscribers: any;
    item_count: number;
    artist: {
        name: any;
        channel_id: any;
        endpoint: any;
    };
    year: any;
    views: any;
    author: {
        name: any;
        channel_id: any;
        endpoint: any;
    };
    artists: any;
    thumbnail: any;
    thumbnail_overlay: any;
    menu: any;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
