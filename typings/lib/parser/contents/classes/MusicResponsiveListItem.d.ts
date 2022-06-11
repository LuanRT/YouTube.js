export = MusicResponsiveListItem;
declare class MusicResponsiveListItem {
    constructor(data: any);
    type: string;
    endpoint: NavigationEndpoint;
    thumbnails: any;
    badges: any;
    menu: any;
    overlay: any;
    id: any;
    title: any;
    duration: {
        text: any;
        seconds: number;
    } | {
        text: any;
        seconds: number;
    };
    album: {
        id: any;
        name: any;
        endpoint: any;
    };
    artists: any;
    views: any;
    author: {
        name: any;
        channel_id: any;
        endpoint: any;
    } | {
        name: any;
        channel_id: any;
        endpoint: any;
    } | {
        name: any;
        channel_id: any;
        endpoint: any;
    };
    name: any;
    subscribers: any;
    year: any;
    item_count: number;
    #private;
}
import NavigationEndpoint = require("./NavigationEndpoint");
