export = ArtistResultItem;
declare class ArtistResultItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        name: any;
        subscribers: any;
        thumbnails: any;
    };
}
