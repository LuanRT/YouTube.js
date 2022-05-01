export = AlbumResultItem;
declare class AlbumResultItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        title: any;
        author: any;
        year: any;
        thumbnails: any;
    };
}
