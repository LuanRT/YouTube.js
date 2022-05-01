export = SongResultItem;
declare class SongResultItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        title: any;
        artist: any;
        album: any;
        duration: any;
        thumbnails: any;
    };
}
