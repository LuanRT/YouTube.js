export = VideoResultItem;
declare class VideoResultItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        title: any;
        author: any;
        views: any;
        duration: any;
        thumbnails: any;
    };
}
