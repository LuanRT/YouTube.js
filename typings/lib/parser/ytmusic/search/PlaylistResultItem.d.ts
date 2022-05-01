export = PlaylistResultItem;
declare class PlaylistResultItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        title: any;
        author: any;
        channel_id: any;
        total_items: number;
    };
}
