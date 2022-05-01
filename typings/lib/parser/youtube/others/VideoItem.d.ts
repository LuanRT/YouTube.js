export = VideoItem;
declare class VideoItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        id: any;
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
            thumbnail: any;
            moving_thumbnail: any;
            published: any;
            duration: {
                seconds: number;
                simple_text: any;
                accessibility_label: any;
            };
            badges: any;
            owner_badges: any;
        };
    };
}
