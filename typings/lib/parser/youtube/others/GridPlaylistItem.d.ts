export = GridPlaylistItem;
declare class GridPlaylistItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        title: any;
        metadata: {
            thumbnail: any;
            video_count: any;
        };
    };
}
