export = VideoResultItem;
declare class VideoResultItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
        url: string;
        title: any;
        description: any;
        channel: {
            id: any;
            name: any;
            url: string;
        };
        metadata: {
            view_count: any;
            short_view_count_text: {
                simple_text: any;
                accessibility_label: any;
            };
            thumbnails: any;
            duration: {
                seconds: number;
                simple_text: any;
                accessibility_label: any;
            };
            published: any;
            badges: any;
            owner_badges: any;
        };
    };
}
