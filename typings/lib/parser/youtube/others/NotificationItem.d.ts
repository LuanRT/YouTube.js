export = NotificationItem;
declare class NotificationItem {
    static parse(data: any): any;
    static parseItem(item: any): {
        title: any;
        sent_time: any;
        timestamp: any;
        channel_name: any;
        channel_thumbnail: any;
        video_thumbnail: any;
        video_url: string;
        read: any;
    };
}
