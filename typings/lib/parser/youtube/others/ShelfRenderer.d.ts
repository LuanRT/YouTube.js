export = ShelfRenderer;
declare class ShelfRenderer {
    static parse(data: any): {
        title: any;
        videos: any;
    };
    static getTitle(data: any): any;
    static parseItems(data: any): any;
}
