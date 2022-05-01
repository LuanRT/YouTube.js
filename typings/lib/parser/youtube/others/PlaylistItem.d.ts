export = PlaylistItem;
declare class PlaylistItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        title: any;
        author: any;
        duration: {
            seconds: number;
            simple_text: any;
            accessibility_label: any;
        };
        thumbnails: any;
    };
}
