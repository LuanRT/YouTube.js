export = MusicResponsiveListItem;
declare class MusicResponsiveListItem {
    constructor(data: any, ctx: any);
    type: any;
    endpoint: NavigationEndpoint;
    thumbnails: any;
    badges: any;
    menu: any;
    overlay: any;
    id: any;
    title: any;
    artist: any;
    album: any;
    duration: {
        text: any;
        seconds: number;
    } | {
        text: any;
        seconds: number;
    };
    views: any;
    author: {
        name: any;
        channel_id: any;
    } | {
        name: any;
        channel_id: any;
    } | {
        name: any;
        channel_id: any;
    };
    name: any;
    subscribers: any;
    year: any;
    item_count: number;
    #private;
}
import NavigationEndpoint = require("./NavigationEndpoint");
